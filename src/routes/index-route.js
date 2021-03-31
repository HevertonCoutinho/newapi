'use strict'
const express = require('express')
const router = express.Router()

router.get("/", (req, res ) => {
    res.status(200).send({
        'title': "Node Store API",
        'Version': "0.0.2"})
})

module.exports = router