const db = require('../model/database')
const Admin = db.admins
const jsonWebToken = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.register = async(req, res, next) => {
    try {
        let { username, password } = req.body

        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt)

        let resisterAdmin = await Admin.create({
            username: username,
            password: hashPassword
        })
        if (!resisterAdmin) {
            return res.status(403).json({ msg: 'register fail' })
        }
        return res.status(200).json(resisterAdmin)
    } catch (e) {
        console.log(e)
    }
}

exports.loginAdmin = async(req, res, next) => {
    try {
        //let { username, password } = req.body

        let admins = await Admin.findAll({
            where: {
                username: req.body.username
            }
        })
        console.log(admins)
        if (!admins[0]) {
            return res.status(403).json({ msg: 'Authentication fail' })
        }
        let passwordMatch = await bcrypt.compare(req.body.password, admins[0].password)
        if (!passwordMatch) {
            return res.status(403).json({ msg: 'Authentication Fail' })
        }
        let adminId = admins[0].id
        let adminUsername = admins[0].username

        let access_token = jsonWebToken.sign({ adminId, adminUsername }, 'access_token_secret', {
            expiresIn: '30s'
        })

        let refresh_token = jsonWebToken.sign({ adminId, adminUsername }, 'refresh_token_secret', {
            expiresIn: '1d'
        })

        let updateAdmin = await Admin.update({
            refresh_token: refresh_token
        }, {
            where: {
                id: adminId
            }
        })

        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.json({ access_token })

    } catch (e) {
        console.log(e)
    }
}

exports.logOut = async(req, res, next) => {
    try {
        let refresh_token = req.cookies.refresh_token
        if (!refresh_token) {
            return res.status(403).json({ msg: 'something wrong' })
        }
        const admins = await Admin.findAll({
            where: {
                refresh_token: refresh_token
            }
        })

        if (!admins[0]) {
            return res.status(403).json({ msg: 'something wrong' })
        }
        const adminId = admins[0].id
        await Admin.update({
            refresh_token: null
        }, {
            where: {
                id: adminId
            }
        })
        res.clearCookie('refresh_token')
        res.end()
        return res.status(200)
    } catch (e) {
        console.log(e)
    }
}