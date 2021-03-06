const router = require('express').Router();
const { createProduct, getAllProducts, updateProductInfo, getAccessories, getAudio, getComputers, getHdtvs, getOneProduct, updateProduct, deleteProduct, searchProduct, reservationProducts } = require('../controllers/productControllers')


router.post('/create', createProduct)
router.post('/email', reservationProducts)

router.get('/all', getAllProducts)
router.get('/hdtvs', getHdtvs)
router.get('/search', searchProduct)
router.get('/computers', getComputers)
router.get('/accessories', getAccessories)
router.get('/audio', getAudio)
router.get('/detail/:id', getOneProduct)
router.patch('/update-info/:id', updateProductInfo)
router.patch('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)


module.exports = router;