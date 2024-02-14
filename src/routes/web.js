const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/projects/ivsm-panel", (req, res) => {
    res.render("ivsm-panel/index.ejs");
});

router.get("/projects/ivsm-panel/display", (req, res) => {
    res.render("ivsm-panel/panel-layout/pages/panel.ejs");
});

router.get("/projects/ivsm-panel/download", (req, res) => {
    res.download("src/files/panel.zip");
});

module.exports = {
    web: router,
};
