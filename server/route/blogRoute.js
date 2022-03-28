const router = require('express').Router()
const { createBlogController } = require('../controller/blogController')
const { verifyToken } = require('../middleware/verifyToken')
const upload = require('../middleware/upload')

router.post('/create-blog', upload.single('thumbnail_image'), verifyToken, createBlogController)

module.exports = router