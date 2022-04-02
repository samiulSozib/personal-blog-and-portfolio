const db = require('../model/database')
const About = db.abouts
const cloudinary = require('../utils/cloudinary')

exports.createAbout = async(req, res, next) => {
    try {

        let result = await cloudinary.uploader.upload(req.file.path, { folder: 'blog-portfolio' })
        console.log(result.secure_url)
        let { title, name, basic_description, facebook_link, github_link, linkedin_link, location, email_address, copy_right, description, education } = req.body
        let createdAbout = await About.create({
            title,
            name,
            basic_description,
            facebook_link,
            github_link,
            linkedin_link,
            location,
            email_address,
            copy_right,
            description,
            education,
            image: result.secure_url
        })
        if (createdAbout) {
            return res.status(200).json(createdAbout)
        }



    } catch (e) {
        console.log(e)
    }
}

exports.getAbout = async(req, res, next) => {
    try {
        let about = await About.findAll()
        return res.status(200).json(about[0])
    } catch (e) {
        console.log(e)
    }
}

// update about 
exports.updateAbout = async(req, res, next) => {
    let about_id = req.params.id
    let { title, name, basic_description, facebook_link, github_link, linkedin_link, location, email_address, copy_right, description, education } = req.body
    try {
        let updated_about = await About.update({
            title,
            name,
            basic_description,
            facebook_link,
            github_link,
            linkedin_link,
            location,
            email_address,
            copy_right,
            description,
            education
        }, {
            where: {
                id: about_id
            }
        })
        return res.json(updated_about)
    } catch (e) {
        console.log(e)
    }
}