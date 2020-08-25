const router = require('express').Router();
const { createProduct, getAllProducts, getAccesories, getAudio, getComputers, getHdtvs, getOneProduct, updateProduct, deleteProduct } = require('../controllers/productControllers')


router.post('/create', createProduct)
router.get('/all', getAllProducts)
router.get('/hdtvs', getHdtvs)
router.get('/computers', getComputers)
router.get('/accesories', getAccesories)
router.get('/audio', getAudio)
router.get('/detail/:id', getOneProduct)
router.patch('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)


module.exports = router;