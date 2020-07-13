const express = require('express')
const urllib = require('urllib')

const router = express.Router()

router.get('/sanity', (req, res) => {
    res.send("OK")
})

router.get('/recipes/:ingredient', (req, res) => {
    const { ingredient } = req.params

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (err, data) => {
        res.send(JSON.parse(data.toString()).results
            .map(r => ({
                ingredients: r.ingredients,
                title: r.title,
                thumbnail: r.thumbnail,
                href: r.href
            })))
    })
})

module.exports = router