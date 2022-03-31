const router = require('express').Router()
const upload = require('../middleware/upload')
const { verifyToken } = require('../middleware/verifyToken')
const { createProject, getAllProjects, deleteProject, getProject, updateProject } = require('../controller/projectController')


router.get('/:id', verifyToken, getProject)
router.get('/', verifyToken, getAllProjects)

router.delete('/delete/:id', verifyToken, deleteProject)
router.post('/create-project', upload.single('thumbnail_image'), verifyToken, createProject)
router.put('/update-project/:id', verifyToken, updateProject)


module.exports = router