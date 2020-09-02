const router = require('express').Router();
const { createBanner, getAllBanners, getAvailableBanners, getOneBanner, updateBanner, deleteBanner } = require('../controllers/bannerControllers')


router.post('/create', createBanner)
router.get('/all', getAllBanners)
router.get('/active', getAvailableBanners)
router.get('/detail/:id', getOneBanner)
router.patch('/update/:id', updateBanner)
router.delete('/delete/:id', deleteBanner)


module.exports = router;