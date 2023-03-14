const express = require('express')
const app = express()
const router = require('./routes/employee.js')
const body = require('body-parser')
const db = require("./Config.js")

app.use(body.parse())
db.sequelize.sync();



app.use(body.json())
app.use("/api",router)

app.listen(3000)

