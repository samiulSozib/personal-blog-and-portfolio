module.exports = (sequelize, DataTypes) => {
    const Abouts = sequelize.define("abouts", {
        title: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        basic_description: {
            type: DataTypes.STRING
        },
        facebook_link: {
            type: DataTypes.STRING
        },
        github_link: {
            type: DataTypes.STRING
        },
        linkedin_link: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        email_address: {
            type: DataTypes.STRING
        },
        copy_right: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        education: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Abouts
}