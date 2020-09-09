const Product = require('../models/Product')

exports.createProduct = async(req, res, next) => {
    const { img, specifications, newProduct: { title, price, description, cathegory } } = req.body


    const preProduct = await Product.create({ img, specifications, title, price, description, cathegory })

    const url = `/${cathegory}/${preProduct._id}`

    Product.findByIdAndUpdate(preProduct._id, { url }, { new: true })
        .then(product => res.status(200).json({ product }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json({ products }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneProduct = (req, res, next) => {
    const { id } = req.params
    Product.findById(id)
        .then(product => res.status(200).json({ product }))
        .catch(err => res.status(500).json({ err }))
}

exports.getHdtvs = (req, res, next) => {
    Product.find({ cathegory: 'hdtvs' })
        .then(hdtvs => res.status(200).json({ hdtvs }))
        .catch(err => res.status(500).json({ err }))
}
exports.getComputers = (req, res, next) => {
    Product.find({ cathegory: 'computers' })
        .then(computers => res.status(200).json({ computers }))
        .catch(err => res.status(500).json({ err }))
}
exports.getAccesories = (req, res, next) => {
    Product.find({ cathegory: 'accesories' })
        .then(accesories => res.status(200).json({ accesories }))
        .catch(err => res.status(500).json({ err }))
}
exports.getAudio = (req, res, next) => {
    Product.find({ cathegory: 'audio' })
        .then(audio => res.status(200).json({ audio }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateProduct = async(req, res, next) => {
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