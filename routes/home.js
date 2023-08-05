const express = require('express')
const Chat = require('../models/chat')

const router = express.Router()

// GET routes
router.get('/', (req, res) => {
    Chat.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'Home', messages: result })
        })
        .catch(err => console.log(err))
})

// POST routes
router.post('/', (req, res) => {
    const chat = new Chat(req.body)

    chat.save()
        .then(result => {
            console.log('saved!')
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

module.exports = router