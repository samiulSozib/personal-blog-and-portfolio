const router = require('express').Router()
const { createCategory, allCategories } = require('../controller/categoriesController')
const { verifyToken } = require('../middleware/verifyToken')

router.post('/create', verifyToken, createCategory)
router.get('/', verifyToken, allCategories)

module.exports = router