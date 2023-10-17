var express = require("express")
var router = express.Router()
var skillsCtrl = require("../controllers/skills")

// All actual Paths begin with /todos
router.get("/", function (req, res) {
    res.send("respond with a resource")
})

module.exports = router
