const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {

    const articles = [{
        title: 'Test Article1',
        createdAt: new Date(),
        description: 'Deserunt amet incididunt mollit amet nisi nostrud elit id ut sint mollit..'
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description: 'Minim velit sint esse Lorem commodo aute ipsum est occaecat minim sunt. '
    }]
    
    res.render('articles/index', { articles: articles})
})


app.use('/articles', articleRouter)
app.listen(1975)
