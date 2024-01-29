const express = require("express")
const path = require("path")
const session = require("express-session");


//DB
const { connectDatabase } = require("./database/db-connector")

connectDatabase()

//Routers
const { web } = require("./routes/web")
const { admin } = require("./routes/admin")


const app = express()



// Static files

app.set("port", "3000")
app.set("app", "ivans-web")
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.set("projects", path.join(__dirname, "/projects"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        sameSite: "strict",
      },
    })
  );    


app.use(web)
app.use(admin)

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000)


console.log(`${app.get("app")} is starting in port ${app.get("port")}`)