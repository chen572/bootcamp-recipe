const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})