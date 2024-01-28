const express = require("express")
const path = require("path")


//Routers
const { web } = require("./routes/web")

const app = express()


// Static files

app.set("port", "3000")
app.set("app", "ivans-web")
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.set("projects", path.join(__dirname, "/projects"));
app.use(express.static(path.join(__dirname, "public")));


app.use(web)

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000)


console.log(`${app.get("app")} is starting in port ${app.get("port")}`)