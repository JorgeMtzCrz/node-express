const Subscriber = require('../models/Subscriber')
const { sendEmail } = require('../config/nodemailer')

exports.createSubscriber = async(req, res, next) => {
    const { email } = req.body
    const user = await Subscriber.findOne({ email })

    if (!user) {
        const newUser = await Subscriber.create({...req.body })
        if (newUser) {
            sendEmail(email)
                .then(info => {
                    res.status(200).json({ msg: "Email sent" })
                })
                .catch(err => {
                    res.send(err)
                })
        }
    } else {
        res.status(400).json({ msg: "User already exist" })
    }
}

exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find()
        .then(subscribers => res.status(200).json({ subscribers }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneSubscriber = (req, res, next) => {
    const { id } = req.params
    Subscriber.findById(id)
        .then(subscriber => res.status(200).json({ subscriber }))
        .catch(err => res.status(500).json({ err }))
}


exports.deleteSubscriber = (req, res, next) => {
    const { id } = req.params
    Subscriber.findByIdAndDelete(id)
        .then(subscriber => res.status(200).json({ subscriber }))
        .catch(err => res.status(500).json({ err }))
}