const express = require('express')
const urllib = require('urllib')

const router = express.Router()

router.get('/sanity', (req, res) => {
    res.send("OK")
})

router.get('/recipes/:ingredient', (req, res) => {
    const { ingredient } = req.params

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (err, data) => {
        const parsedData = JSON.parse(data.toString())
        res.send(parsedData)
    })
})

module.exports = router