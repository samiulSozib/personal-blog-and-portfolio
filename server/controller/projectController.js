const db = require('../model/database')
const Projects = db.projects
const cloudinary = require('../utils/cloudinary')


exports.createProject = async(req, res, next) => {
    try {
        let result = await cloudinary.uploader.upload(req.file.path, { folder: 'blog-portfolio' })
        let { title, features, developer, live_demo, description } = req.body
        let createdProject = await Projects.create({
            title,
            thumbnail_image: result.secure_url,
            features,
            developer,
            live_demo,
            description
        })
        if (createdProject) {
            return res.status(200).json(createdProject)
        }
    } catch (e) {
        console.log(e)
    }
}