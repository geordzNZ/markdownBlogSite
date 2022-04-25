const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {

    const articles = [{
        title: 'Test Article1',
        createdAt: new Date(),
        description: 'Deserunt amet incididunt mollit amet nisi nostrud elit id ut sint mollit. Ut id laboris dolore sit cillum laborum ut eu aute nisi sit Lorem cillum. Laborum minim aliquip elit exercitation sunt enim minim exercitation dolor pariatur. Incididunt elit veniam laborum ullamco voluptate occaecat cupidatat eiusmod excepteur.'
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description: 'Minim velit sint esse Lorem commodo aute ipsum est occaecat minim sunt. Voluptate qui id anim est aliquip excepteur pariatur ea cillum ad et culpa. Ex esse enim pariatur aute exercitation culpa consequat. Consectetur minim incididunt incididunt proident elit qui cillum ut sunt ut aliqua.'
    }]
    
    res.render('articles/index', { articles: articles})
})

app.listen(1975)
