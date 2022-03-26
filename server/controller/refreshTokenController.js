const db = require('../model/database')
const Admin = db.admins
const jsonWebToken = require('jsonwebtoken')

exports.refreshToken = async(req, res, next) => {
    try {
        let refresh_token = req.cookies.refresh_token
        console.log(refresh_token)
        if (!refresh_token) {
            return res.status(403).json({ msg: 'no token' })
        }
        let admins = await Admin.findAll({
            where: {
                refresh_token: refresh_token
            }
        })
        if (!admins[0]) {
            return res.status(404).json({ msg: 'something wrong' })
        }

        jsonWebToken.verify(refresh_token, 'refresh_token_secret', (err, decode) => {
            if (err) {
                return res.status(404).json({ msg: 'something wrong' })
            }
            let adminId = admins[0].id
            let adminUsername = admins[0].username

            const access_token = jsonWebToken.sign({ adminId, adminUsername }, 'access_token_secret', {
                expiresIn: '30s'
            })
            return res.json({ access_token })
        })
    } catch (e) {
        console.log(e)
    }
}