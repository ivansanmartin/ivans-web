const express = require("express")
const fs = require('fs')

const router = express.Router()

console.log()

router.get("/files/:filename", (req, res) => {
    const filename = req.params.filename
    const path = `./src/files/${filename}`
    if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        res.send('File not found')
    }

})


router.get("/projects/ivsm-panel", (req, res) => {
    res.render("ivsm-panel/index.ejs")

})

router.get("/projects/ivsm-panel/display", (req, res) => {
    res.render("ivsm-panel/panel-layout/pages/panel.ejs")
})

router.get("/projects/ivsm-panel/download", (req, res) => {
    res.download("src/files/panel.zip")
})


module.exports = {
    web: router
}