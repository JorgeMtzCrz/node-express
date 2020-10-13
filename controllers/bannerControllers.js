const Banner = require('../models/Banner')

exports.createBanner = (req, res, next) => {
    const { img, newBanner: { title, subtitle, url } } = req.body
    Banner.create({ img, title, subtitle, url })
        .then(banner => res.status(200).json({ banner }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllBanners = (req, res, next) => {
    Banner.find()
        .then(banners => res.status(200).json({ banners }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneBanner = (req, res, next) => {
    const { id } = req.params
    Banner.findById(id)
        .then(banner => res.status(200).json({ banner }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAvailableBanners = (req, res, next) => {
    Banner.find({ available: true })
        .then(banners => res.status(200).json({ banners }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateBanner = async(req, res, next) => {
    const { id } = req.params
    const updateAvailable = await Banner.findById(id)
    Banner.findByIdAndUpdate(id, { available: !updateAvailable.available }, { new: true })
        .then(banner => res.status(200).json({ banner }))
        .catch(err => res.status(500).json({ err }))
}
exports.updateBannerInfo = async(req, res, next) => {
    const { id } = req.params

    Banner.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(banner => res.status(200).json({ banner }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteBanner = (req, res, next) => {
    const { id } = req.params
    Banner.findByIdAndDelete(id)
        .then(banner => res.status(200).json({ banner }))
        .catch(err => res.status(500).json({ err }))
}