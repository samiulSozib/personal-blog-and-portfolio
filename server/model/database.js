const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('blog_portfolio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: { max: 5, min: 0, idle: 10000 }
})

sequelize.authenticate()
    .then(() => {
        console.log('database connect success')
    })
    .catch(err => {
        console.log(err)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('sync database')
    })

db.admins = require('./admins')(sequelize, DataTypes)
db.categories = require('./categories')(sequelize, DataTypes)
db.blogs = require('./blogs')(sequelize, DataTypes)
db.projects = require('./projects')(sequelize, DataTypes)
db.blog_cats = require('./blog_cats')(sequelize, DataTypes)
db.abouts = require('./abouts')(sequelize, DataTypes)

module.exports = db