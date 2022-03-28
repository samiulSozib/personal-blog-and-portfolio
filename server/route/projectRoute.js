const router = require('express').Router()
const upload = require('../middleware/upload')
const { verifyToken } = require('../middleware/verifyToken')
const { createProject } = require('../controller/projectController')

router.post('/create-project', upload.single('thumbnail_image'), verifyToken, createProject)


module.exports = router