import express from "express"
const { log } = console

const app = express()
app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(process.env.PORT || 3000, () => {
  log("Server is running on port 3000")
})
