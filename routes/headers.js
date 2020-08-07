const router = require('express').Router();
const { createHeader, getAllHeaders, getOneHeader, updateHeader, deleteHeader } = require('../controllers/headerControllers')


router.post('/create', createHeader)
router.get('/all', getAllHeaders)
router.get('/detail/:id', getOneHeader)
router.patch('/update/:id', updateHeader)
router.delete('/delete/:id', deleteHeader)


module.exports = router;