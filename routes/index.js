var express = require("express")
var router = express.Router()
var skills = require("../models/skill")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express Skills",})
})

module.exports = router
