// starter code
const router = require("express").Router()

// all routes

router.get('/movies', (req, res, next) => {
    res.render('movies/movies.hbs')
})

module.exports = router