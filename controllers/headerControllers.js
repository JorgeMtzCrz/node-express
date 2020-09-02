const Header = require('../models/Header')

exports.createHeader = (req, res, next) => {
    const { img, newHeader: { title, subtitle, description, url } } = req.body
    Header.create({ img, title, subtitle, description, url })
        .then(header => res.status(200).json({ header }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllHeaders = (req, res, next) => {
    Header.find()
        .then(headers => res.status(200).json({ headers }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneHeader = (req, res, next) => {
    const { id } = req.params
    Header.findById(id)
        .then(header => res.status(200).json({ header }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAvailableHeaders = (req, res, next) => {
    Header.find({ available: true })
        .then(headers => res.status(200).json({ headers }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateHeader = async(req, res, next) => {
    const { id } = req.params
    const updateAvailable = await Header.findById(id)

    Header.findByIdAndUpdate(id, { available: !updateAvailable.available }, { new: true })
        .then(header => res.status(200).json({ header }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteHeader = (req, res, next) => {
    const { id } = req.params
    Header.findByIdAndDelete(id)
        .then(header => res.status(200).json({ header }))
        .catch(err => res.status(500).json({ err }))
}