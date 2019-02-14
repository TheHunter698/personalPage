const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(200)
})

router.post('/', (req, res) => {
    debugger
    console.log(req.data)   
    res.send(201)
})

module.exports = router