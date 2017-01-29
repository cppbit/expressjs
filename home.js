var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send("Get Home page")
})

router.post('/', (req, res) => {
    res.send("Post home page")
})

module.exports = router