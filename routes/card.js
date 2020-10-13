const router = require('express').Router();
const { createCard, getAvailableCards, getAllCards, getOneCard, updateCard, deleteCard, updateCardInfo } = require('../controllers/cardControllers')


router.post('/create', createCard)
router.get('/all', getAllCards)
router.get('/active', getAvailableCards)
router.get('/detail/:id', getOneCard)
router.patch('/update/:id', updateCard)
router.patch('/update-info/:id', updateCardInfo)
router.delete('/delete/:id', deleteCard)


module.exports = router;