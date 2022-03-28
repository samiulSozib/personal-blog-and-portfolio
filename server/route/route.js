const CategoriesRouter = require('./categoriesRoute')
const AboutRouter = require('./aboutRoute')
const AuthRouter = require('./adminRoute')
const TokenRouter = require('./token')
const UploadRouter = require('./uploadRoute')
const BlogRouter = require('./blogRoute')
const ProjectRouter = require('./projectRoute')



const routes = [{
        path: '/auth',
        handler: AuthRouter
    },
    {
        path: '/projects',
        handler: ProjectRouter
    },
    {
        path: '/blogs',
        handler: BlogRouter

    },
    {
        path: '/uploads',
        handler: UploadRouter
    },
    {
        path: '/token',
        handler: TokenRouter
    },
    {
        path: '/about',
        handler: AboutRouter
    },
    {
        path: '/categories',
        handler: CategoriesRouter
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