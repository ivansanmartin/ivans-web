const express = require("express")

const router = express.Router()


router.get("/projects/ivsm-panel", (req, res) => {
    res.render("ivsm-panel/index.ejs")

})


module.exports = {
    web: router
}