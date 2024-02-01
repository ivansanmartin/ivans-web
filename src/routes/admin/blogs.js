const express = require("express")

const router = express.Router()

router.get("/admin/panel/blogs/create", (req, res) => {
    res.render("admin/blogs/create-blog.ejs")
})

module.exports = {
    blogAdmin: router
}