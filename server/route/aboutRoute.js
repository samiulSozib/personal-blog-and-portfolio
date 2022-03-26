const route = require('express').Router()
const { createAbout, getAbout } = require('../controller/aboutController')
const upload = require('../middleware/upload')

route.post('/create', upload.single('image'), createAbout)
route.get('/', getAbout)

module.exports = route