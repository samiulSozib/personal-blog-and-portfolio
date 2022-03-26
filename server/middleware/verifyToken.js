const jsonWebToken = require('jsonwebtoken')

exports.verifyToken = async(req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(404)
    }
    jsonWebToken.verify(token, 'access_token_secret', (err, decode) => {
        if (err) {
            return res.status(404)
        }
        next()
    })
}