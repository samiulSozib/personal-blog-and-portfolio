const db = require('../model/database')
const About = db.abouts
const cloudinary = require('../utils/cloudinary')

exports.createAbout = async(req, res, next) => {
    try {

        let result = await cloudinary.uploader.upload(req.file.path)
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
        return res.status(200).json(about)
    } catch (e) {
        console.log(e)
    }
}