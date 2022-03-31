const router = require('express').Router()
const { createCategory, allCategories, deleteCategory } = require('../controller/categoriesController')
const { verifyToken } = require('../middleware/verifyToken')

router.post('/create', verifyToken, createCategory)
router.delete('/delete/:id', verifyToken, deleteCategory)
router.get('/', verifyToken, allCategories)

module.exports = router