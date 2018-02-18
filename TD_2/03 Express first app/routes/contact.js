"use strict";

const express = require('express')

const fs = require('fs')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("/contact")
})

router.post('/send', (req, res) => {
    let params = req.body;
    console.log(params)
    res.send(JSON.stringify(params))
})
  

module.exports = router
  