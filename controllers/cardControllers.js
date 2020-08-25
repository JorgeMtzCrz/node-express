const Card = require('../models/Card')

exports.createCard = (req, res, next) => {
    const { img, newCard: { title, subtitle, description, url } } = req.body
    Card.create({ img, title, subtitle, url, img, description })
        .then(card => res.status(200).json({ card }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllCards = (req, res, next) => {
    Card.find()
        .then(cards => res.status(200).json({ cards }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneCard = (req, res, next) => {
    const { id } = req.params
    Card.findById(id)
        .then(card => res.status(200).json({ card }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateCard = (req, res, next) => {
    const { id } = req.params
    Card.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(card => res.status(200).json({ card }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteCard = (req, res, next) => {
    const { id } = req.params
    Card.findByIdAndDelete(id)
        .then(card => res.status(200).json({ card }))
        .catch(err => res.status(500).json({ err }))
}