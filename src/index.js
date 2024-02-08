const express = require("express")
const path = require("path")
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session)


//DB
const { connectDatabase } = require("./database/db-connector")

connectDatabase()

//Routers
const { web } = require("./routes/web")
const { blog } = require("./routes/blog");
const { loginAdmin } = require("./routes/admin/login");
const { blogAdmin } = require("./routes/admin/blogs");



const { MONGODB_STRING } = require("./config/environment");


const app = express()

const store = new MongoDBStore({
  uri: MONGODB_STRING,
  collection: "sessions",
  databaseName: "users"
})

store.on("error", (error) => {
  console.log(error)
})



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
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 
      },
      store: store,
      resave: false,
      saveUninitialized: true,
    })
  );    


app.use(web)
app.use(blog)
app.use(loginAdmin)
app.use(blogAdmin)

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000)


console.log(`${app.get("app")} is starting in port ${app.get("port")}`)