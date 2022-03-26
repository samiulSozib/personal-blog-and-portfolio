const CategoriesRoute = require('./categoriesRoute')
const AboutRoute = require('./aboutRoute')

const routes = [{
        path: '/about',
        handler: AboutRoute
    },
    {
        path: '/categories',
        handler: CategoriesRoute
    },
    {
        path: '/',
        handler: (req, res) => {
            return res.json({ msg: 'welcome to my application' })
        }
    }
]

module.exports = (app) => {
    routes.forEach(r => {
        if (r.path == '/') {
            app.get(r.path, r.handler)
        } else {
            app.use(r.path, r.handler)
        }
    })
}