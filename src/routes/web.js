const express = require("express")

const router = express.Router()


router.get("/projects", (req, res) => {
    res.send("projects")
})


module.exports = {
    web: router
}