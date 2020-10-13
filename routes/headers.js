const router = require('express').Router();
const { createHeader, getAllHeaders, getAvailableHeaders, getOneHeader, updateHeader, deleteHeader, updateHeaderInfo } = require('../controllers/headerControllers')


router.post('/create', createHeader)
router.get('/all', getAllHeaders)
router.get('/active', getAvailableHeaders)
router.get('/detail/:id', getOneHeader)
router.patch('/update/:id', updateHeader)
router.patch('/update-info/:id', updateHeaderInfo)
router.delete('/delete/:id', deleteHeader)



module.exports = router;