const express = require('express')
const app = express()

app.use(express.static('public'))

app.use(express.json({ extended: true }))

let messages = []

app.get('/api/messages', (req, res) => {
    res.status(200).json(messages)
})

app.post('/api/messages', (req, res) => {
    console.log(req.body);
    let Time = new Date().getTime()
    let date = new Date(Time)
    messages.push({ messages: req.body.message, timeStamp: date, user: req.body.user })
    res.end()
})


app.listen(3000)