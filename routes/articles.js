const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello from Articles')
})








module.exports = router

