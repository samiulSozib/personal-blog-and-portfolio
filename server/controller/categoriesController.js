const db = require('../model/database')
const Categories = db.categories

exports.createCategory = async(req, res, next) => {
    try {
        let name = req.body.name
        let createdCategory = await Categories.create({
            name: name
        })
        if (createdCategory) {
            return res.status(200).json(createdCategory)
        }

    } catch (e) {
        console.log(e)
    }
}

exports.allCategories = async(req, res, next) => {
    try {
        let categories = await Categories.findAll()
        return res.status(200).json(categories)
    } catch (e) {
        console.log(e)
    }
}

// delete category

exports.deleteCategory = async(req, res, next) => {
    try {
        const category_id = req.params.id
        const deletedCategory = await Categories.destroy({
            where: {
                id: category_id
            }
        })
        return res.json(deletedCategory)
    } catch (e) {
        console.log(e)
    }
}