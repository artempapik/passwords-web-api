const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const passwords = {
    'youtube': '1234567890',
    'amazon': 'hello from your mom',
    'rozetka': 'fuck',
    'comfy': 'комфи магазини суперпокупки',
    'pornhub': 'the most secret password'
}

app.get('/get-passwords', (_, res) => res.send(passwords))

app.post('/create-password', function (req, res) {
    const site = req.body.site
    const password = req.body.password
    passwords[site] = password

    res.status(200)
    res.end()
})

app.put('/change-password', (req, res) => {
    const site = req.body.site
    const password = req.body.password
    passwords[site] = password

    res.status(200)
    res.end()
})

app.listen(3000)
