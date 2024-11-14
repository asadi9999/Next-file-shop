const express=require('exprss');
const router=express();

const MiddleBannerCtrl=require('../controllers/MiddleBannerCtrl');
router.get('/middle-banners',MiddleBannerCtrl.getAllMiddBann);

module.exports=router;


















