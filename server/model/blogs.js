module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("blogs", {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
        thumbnail_image: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Blogs
}