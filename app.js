const express = require('express')
const app = express()
const userRouter = require('./backend/routes/user')
const projectRouter = require('./backend/routes/project')
const mongoose = require("mongoose")
const problemRouter = require('./backend/routes/problem')
app.use("/api/user",userRouter)
app.use("/api/project",projectRouter)
app.use("/api/problem",problemRouter)
const port = process.env.PORT || 8085;
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: "true",
  })
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })
  app.listen(port, function (err) {
    if (!err) {
      console.log("server is running at ")
    }
  })