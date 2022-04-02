const route = require('express').Router()
const { createAbout, getAbout, updateAbout } = require('../controller/aboutController')
const upload = require('../middleware/upload')
const { verifyToken } = require('../middleware/verifyToken')

route.post('/create', upload.single('image'), verifyToken, createAbout)
route.put('/update/:id', verifyToken, updateAbout)
route.get('/', verifyToken, getAbout)

module.exports = route