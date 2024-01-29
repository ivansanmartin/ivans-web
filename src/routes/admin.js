const express = require("express")
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")

const router = express.Router()

//Services
const { sendEmailTo } = require("../services/send-emails");


//DB

const { client } = require("../database/db-connector");

// ENV
const { ADMIN_EMAIL } = require("../config/environment")



router.use(bodyParser.urlencoded({ extended: true }));

router.get("/admin", (req, res) => {
    res.render("admin/login.ejs")

})


router.post("/admin", async (req, res, next) => {
    const { email, password } = req.body

    const db = client.db("users")
    const userCollection = db.collection("admin")

    const userFetch = await userCollection.findOne({ email: email })

    if (!userFetch) {
        return res.send("Contraseña y/o email incorrectos")
    }

    bcrypt.compare(password, userFetch.password, async (err, result) => {
        if (err) {
            return console.log(err)
        }

        if (result) {           
            req.session.authorized = true
            const verificationCode = Math.floor(Math.random() * 10000) + 1;
            
            await userCollection.updateOne({ email: email }, { $set: {
                verify_code: verificationCode
            } })

            sendEmailTo("onboarding@resend.dev", ADMIN_EMAIL, "VERIFICATION CODE", `<h1>${verificationCode}</h1>`)
            res.redirect("admin/code-verify")
        } else {
            return res.send("Contraseña y/o email incorrectos")

        
        }


    })

      
})

router.get("/admin/code-verify", (req, res) => {
    if (!req.session.authorized) {
        return res.redirect("../admin")
    }
    res.render("admin/verify.ejs")

})

router.post("/admin/code-verify", async (req, res) => {
    const { verification } = req.body

    const db = client.db("users")
    const userCollection = db.collection("admin")

    const userFetch = await userCollection.findOne({ verify_code: parseInt(verification) })

    if (!userFetch) {
        console.log(userFetch)
        return res.send("Codigo invalido")
    }
    req.session.authorized = false

    res.send("Valido")



})

module.exports = {
    admin: router
}