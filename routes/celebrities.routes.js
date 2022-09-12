// Starter Code
const router = require("express").Router();

// all routes

// get celebrities page
router.get("/celebrities", (req, res, next) => {
    res.render("celebrities/celebrities.hbs")
  })
  
module.exports = router