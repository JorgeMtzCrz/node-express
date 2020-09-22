const router = require('express').Router();
const { createProduct, getAllProducts, getAccessories, getAudio, getComputers, getHdtvs, getOneProduct, updateProduct, deleteProduct } = require('../controllers/productControllers')


router.post('/create', createProduct)
router.get('/all', getAllProducts)
router.get('/hdtvs', getHdtvs)
router.get('/computers', getComputers)
router.get('/accessories', getAccessories)
router.get('/audio', getAudio)
router.get('/detail/:id', getOneProduct)
router.patch('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)


module.exports = router;
