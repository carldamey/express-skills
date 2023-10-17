var express = require("express")
var router = express.Router()
var todosCtrl = require("../controllers/todos")

// All actual Paths begin with /todos
router.get("/", function (req, res) {
    res.send("respond with a resource")
})

module.exports = router
