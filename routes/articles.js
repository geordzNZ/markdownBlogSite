const express = require('express')
const Article = require('./../models/article')
const router = express.Router()


router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.get('/:id', (req, res) => {
    
})

router.post('/', async (req, res) => {
    console.log("router.post 1");
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    console.log("router.post 2");
    try {
        console.log("router.post 3");
        article = await article.save()
        console.log("router.post 4");
        res.redirect(`articles/${article.id}`)
        console.log("router.post 5");
    } catch (e) {
        console.log("router.post 6");
        res.render('articles/new', { article: article })
        console.log("router.post 7");
    }
})

module.exports = router

