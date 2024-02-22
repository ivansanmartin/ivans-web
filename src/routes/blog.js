const express = require("express")

const router = express.Router()


router.get("/blog/:name", (req, res) => {
    switch (req.params.name) {
        case "firsts-steps-docker":
            res.render("blog/firsts-steps-docker.ejs")
            break;
        case "docker-compose-and-dockerfile":
            res.render("blog/docker-compose-and-dockerfile.ejs")
            break;
        default:
            res.send("Blog doesn't exist")
            break;
    }
})


module.exports = {
    blog: router
}