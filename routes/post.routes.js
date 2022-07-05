const Router = require('express')
const router = new Router
const PostController  = require('../controller/post.controller')

router.post('/post', PostController.createPost)
router.get('/post', PostController.getPostsByUser)


module.exports = router

