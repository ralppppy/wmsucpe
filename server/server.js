const express = require("express")
const next = require("next")
const db = require("./config/database")
const app = express()
const cors = require("cors")
require("dotenv").config()

const dev = true //process.env.NODE_ENV !== "production"
const PORT = process.env.PORT || 3000

// const app = next({ dev })

// const handle = app.getRequestHandler(app)

// app.prepare()
//    .then(() => {

//    })
//    .catch(error => {
//       console.log(error)
//    })

// Test database connection
db.authenticate()
   .then((_) => console.log("Database Connected"))
   .catch((errors) => console.log(`Errors: ${errors}`))

// Cors
server.use(cors())
// BodyparserMiddleware
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use("/api/users", require("./routes/users"))
server.use("/api/auth", require("./routes/auth"))

server.get("*", (req, res) => {
   return handle(req, res)
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
