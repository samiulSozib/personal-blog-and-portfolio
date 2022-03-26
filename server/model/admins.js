module.exports = (sequelize, DataTypes) => {
    const Admins = sequelize.define("admins", {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        refresh_token: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Admins
}