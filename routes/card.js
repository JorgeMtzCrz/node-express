const router = require('express').Router();
const { createCard, getAvailableCards, getAllCards, getOneCard, updateCard, deleteCard } = require('../controllers/cardControllers')


router.post('/create', createCard)
router.get('/all', getAllCards)
router.get('/active', getAvailableCards)
router.get('/detail/:id', getOneCard)
router.patch('/update/:id', updateCard)
router.delete('/delete/:id', deleteCard)


module.exports = router;