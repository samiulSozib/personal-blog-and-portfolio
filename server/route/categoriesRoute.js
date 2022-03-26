const router = require('express').Router()
const { createCategory, allCategories } = require('../controller/categoriesController')

router.post('/create', createCategory)
router.get('/', allCategories)

module.exports = router