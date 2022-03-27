const router = require('express').Router()
const { blogImageUploadController } = require('../controller/uploadController')
const upload = require('../middleware/upload')
const { verifyToken } = require('../middleware/verifyToken')


router.post('/blog-image', upload.single('blogImage'), blogImageUploadController)

module.exports = router