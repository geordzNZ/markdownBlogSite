const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
require("dotenv").config()


const portNum = 1975
// mongoose.connect('mongodb://localhost/blog')

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = "blog"
  mongoose.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then( (client) => {
  console.log(`Connected to ${dbName} Database`);
}
);


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', { articles: articles})
})


app.use('/articles', articleRouter)
app.listen(portNum)
console.log(`Ready on port ${portNum}`)
