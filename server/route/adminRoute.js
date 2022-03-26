const router = require('express').Router()
const { register, loginAdmin, logOut } = require('../controller/authController')

router.post('/register', register)
router.post('/login', loginAdmin)
router.delete('/logout', logOut)

module.exports = router