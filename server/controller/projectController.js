const db = require('../model/database')
const Projects = db.projects
const cloudinary = require('../utils/cloudinary')


exports.createProject = async(req, res, next) => {
    try {
        let result = await cloudinary.uploader.upload(req.file.path, { folder: 'blog-portfolio' })
        let { title, features, developer, live_demo, githubLink, description, type } = req.body
        let createdProject = await Projects.create({
            title,
            thumbnail_image: result.secure_url,
            features,
            developer,
            live_demo,
            githubLink,
            description,
            type
        })
        if (createdProject) {
            return res.status(200).json(createdProject)
        }
    } catch (e) {
        console.log(e)
    }
}

// all project 
exports.getAllProjects = async(req, res, next) => {
    try {
        let projects = await Projects.findAll()
        return res.json(projects)
    } catch (e) {
        console.log(e)
    }
}

// delete project 
exports.deleteProject = async(req, res, next) => {
        try {
            let project_id = req.params.id
            await Projects.destroy({
                where: {
                    id: project_id
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    // get single project 
exports.getProject = async(req, res, next) => {
    try {
        let project_id = req.params.id
        let project = await Projects.findByPk(project_id)
        return res.json(project)
    } catch (e) {
        console.log(e)
    }
}

// update project 
exports.updateProject = async(req, res, next) => {
    let project_id = req.params.id
    let { title, features, developer, live_demo, githubLink, description, type } = req.body
    console.log(req.body)
    try {

        let updated_project = await Projects.update({
            title,
            features,
            developer,
            live_demo,
            githubLink,
            description,
            type
        }, {
            where: {
                id: project_id
            }
        })
        return res.json(updated_project)
    } catch (e) {
        console.log(e)
    }
}