module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define("categories", {
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Categories
}