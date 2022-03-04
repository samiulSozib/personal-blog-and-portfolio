module.exports = (sequelize, DataTypes) => {
    const Blog_Cats = sequelize.define("blog_cats", {
        project_id: {
            type: DataTypes.INTEGER
        },
        category_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true
    })
    return Blog_Cats
}