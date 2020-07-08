const express = require('express')
const router = express.Router()


// All authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})


//New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

// Create Author Route
router.post('/', (res, req) => {
    res.send('Create')
})

module.exports = router