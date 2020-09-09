const router = require('express').Router();
const { createHeader, getAllHeaders, getAvailableHeaders, getOneHeader, updateHeader, deleteHeader } = require('../controllers/headerControllers')


router.post('/create', createHeader)
router.get('/all', getAllHeaders)
router.get('/active', getAvailableHeaders)
router.get('/detail/:id', getOneHeader)
router.patch('/update/:id', updateHeader)
router.delete('/delete/:id', deleteHeader)


module.exports = router;