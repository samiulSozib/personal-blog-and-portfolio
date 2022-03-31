const router = require('express').Router()
const { createBlogController, getAllBlogs, deleteBlog, getBlog, updateBlog } = require('../controller/blogController')
const { verifyToken } = require('../middleware/verifyToken')
const upload = require('../middleware/upload')


router.get('/:id', verifyToken, getBlog)
router.put('/update-blog/:id', verifyToken, updateBlog)
router.delete('/delete/:id', verifyToken, deleteBlog)
router.post('/create-blog', upload.single('thumbnail_image'), verifyToken, createBlogController)
router.get('/', verifyToken, getAllBlogs)

module.exports = router