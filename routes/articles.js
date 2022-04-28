const express = require('express')
const Article = require('./../models/article')
const router = express.Router()


router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
})

router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    res.render('articles/show', { article: article })
})

router.post('/', async (req, res) => {
    // console.log("router.post 1");
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    // console.log("router.post 2");
    try {
        // console.log("router.post 3");
        article = await article.save()
        console.log(`Article saved, ID: ${article.id}`);
        res.redirect(`articles/${article.id}`)
        // console.log("router.post 5");
    } catch (e) {
        console.log("Error posting article");
        res.render('articles/new', { article: article })
        // console.log("router.post 7");
        // console.log(e)
    }
})

module.exports = router

