var express = require("express")
var app = express()
var home = require('./home')


app.use('/', home)


app.listen(3000, () => {
    console.log("Running on port 3000")
});