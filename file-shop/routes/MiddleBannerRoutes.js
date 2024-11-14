const express=require('express');
const router=express();

const MiddleBannerCtrl=require('../controllers/MiddleBannerCtrl');
router.get('/middle-banners',MiddleBannerCtrl.getAllMiddBann);
router.post('/new-middle-banner',MiddleBannerCtrl.NewMidBan);
router.post('/update-middle-banner',MiddleBannerCtrl.updateMidBan);
router.post('/delete-middle-banner',MiddleBannerCtrl.deleteMidBan);

module.exports=router;


















