const db = require('../model/database')
const Blogs = db.blogs
const Blog_Cats = db.blog_cats
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