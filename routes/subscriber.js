const router = require('express').Router();
const { createSubscriber, deleteSubscriber, getAllSubscribers, getOneSubscriber } = require('../controllers/subscriberController')


router.post('/create', createSubscriber)
router.get('/all', getAllSubscribers)
router.get('/detail/:id', getOneSubscriber)
router.delete('/delete/:id', deleteSubscriber)


module.exports = router;