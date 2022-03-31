module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define("projects", {
        title: {
            type: DataTypes.STRING
        },
        thumbnail_image: {
            type: DataTypes.STRING
        },
        features: {
            type: DataTypes.STRING
        },
        developer: {
            type: DataTypes.STRING
        },
        live_demo: {
            type: DataTypes.STRING
        },
        githubLink: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Projects
}