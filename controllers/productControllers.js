const Product = require('../models/Product')

exports.createProduct = (req, res, next) => {
    Product.create({...req.body })
        .then(product => res.status(200).json({ product }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllProducts = (req, res, next) => {
    Product.find().populate({ path: 'workers.workerId' })
        .then(products => res.status(200).json({ products }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneProduct = (req, res, next) => {
    const { id } = req.params
    Product.findById(id).populate({ path: 'workers.workerId' })
        .then(product => res.status(200).json({ product }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateProduct = (req, res, next) => {
    const { id } = req.params
    Product.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(product => res.status(200).json({ product }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteProduct = (req, res, next) => {
    const { id } = req.params
    Product.findByIdAndDelete(id)
        .then(product => res.status(200).json({ product }))
        .catch(err => res.status(500).json({ err }))
}