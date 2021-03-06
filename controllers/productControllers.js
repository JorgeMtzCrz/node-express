const Product = require('../models/Product')
const { sendEmail, deliveryEmail } = require('../config/nodemailer')


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

exports.searchProduct = (req, res, next) => {
    const {
        title
    } = req.query;
    const regex = title.split(' ').join('|');
    Product.find({
            $or: [{
                title: {
                    $regex: regex,
                    $options: 'i'
                }
            }]
        }).limit(5)
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
    Product.find({ cathegory: 'hdtvs', available: true })
        .then(hdtvs => res.status(200).json({ hdtvs }))
        .catch(err => res.status(500).json({ err }))
}
exports.getComputers = (req, res, next) => {
    Product.find({ cathegory: 'computers', available: true })
        .then(computers => res.status(200).json({ computers }))
        .catch(err => res.status(500).json({ err }))
}
exports.getAccessories = (req, res, next) => {
    Product.find({ cathegory: 'accessories', available: true })
        .then(accessories => res.status(200).json({ accessories }))
        .catch(err => res.status(500).json({ err }))
}
exports.getAudio = (req, res, next) => {
    Product.find({ cathegory: 'audio', available: true })
        .then(audio => res.status(200).json({ audio }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateProduct = async(req, res, next) => {
    const { id } = req.params
    const updateAvailable = await Product.findById(id)

    Product.findByIdAndUpdate(id, { available: !updateAvailable.available }, { new: true })
        .then(product => res.status(200).json({ product }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateProductInfo = async(req, res, next) => {
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

exports.reservationProducts = (req, res, next) => {
    const { email, name, products, order, total, delivery } = req.body
    if (delivery === 0) {
        sendEmail(email, name, products, order, total)
            .then(info => {
                res.send('Email sent store')
            })
            .catch(err => {
                res.send(err)
            })
    } else if (delivery === 20) {
        deliveryEmail(email, name, products, order, total)
            .then(info => {
                res.send('Email sent delivery')
            })
            .catch(err => {
                res.send(err)
            })
    }

}