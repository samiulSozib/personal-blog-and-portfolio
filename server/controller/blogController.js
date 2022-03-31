const db = require('../model/database')
const Blogs = db.blogs
const Blog_Cats = db.blog_cats
const Categories = db.categories
const cloudinary = require('../utils/cloudinary')

exports.createBlogController = async(req, res, next) => {
    try {
        let result = await cloudinary.uploader.upload(req.file.path, { folder: 'blog-portfolio' })
        console.log(result.secure_url)
        let { title, value, description, author } = req.body
        let createdBlog = await Blogs.create({
            title,
            description,
            author,
            thumbnail_image: result.secure_url
        })

        if (createdBlog) {
            let blog_id = createdBlog.id
            let categories = value.split(',')
            let blog_cat_array = []
            let blog_cat_obj = {}
            for (let i = 0; i < categories.length; i++) {
                blog_cat_obj['blog_id'] = blog_id
                blog_cat_obj['category_id'] = categories[i]
                blog_cat_array.push(blog_cat_obj)
                blog_cat_obj = {}
            }
            //console.log(blog_cat_array)
            const created_blog_cat = await Blog_Cats.bulkCreate(blog_cat_array)
            return res.status(200).json(createdBlog)
        }

    } catch (e) {
        console.log(e)
    }
}

// get blogs 

exports.getAllBlogs = async(req, res, next) => {
    try {
        let blogs = await Blogs.findAll({
            include: [{
                model: Categories
            }]
        })
        return res.json(blogs)
    } catch (e) {
        console.log(e)
    }
}

// delete blog
exports.deleteBlog = async(req, res, next) => {
    try {
        let blog_id = req.params.id
        let deletedBlog = await Blogs.destroy({
            where: {
                id: blog_id
            }
        })
        return res.json(deletedBlog)
    } catch (e) {
        console.log(e)
    }
}

// get single blog 
exports.getBlog = async(req, res, next) => {
    try {
        let id = req.params.id
        let blog = await Blogs.findByPk(id)
        return res.json(blog)
    } catch (e) {
        console.log(e)
    }
}

// update blog 
exports.updateBlog = async(req, res, next) => {
    try {
        let blog_id = req.params.id
        let updateBlog = await Blogs.update({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        }, {
            where: {
                id: blog_id
            }
        })
        return res.json(updateBlog)
    } catch (e) {
        console.log(e)
    }
}