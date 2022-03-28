const cloudinary = require('../utils/cloudinary')

exports.blogImageUploadController = async(req, res, next) => {
    if (req.file) {
        console.log(req.file)
        let result = await cloudinary.uploader.upload(req.file.path, { folder: 'blog-portfolio' })
        console.log(result)
        return res.status(200).json({
            imageUrl: result.secure_url
        })
    }
    return res.status(500).json({
        msg: 'Server error'
    })
}