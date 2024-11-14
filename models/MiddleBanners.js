const mongoose=require('mongoose');
const MiddleBanners = new mongoose.schema({
    image:{
        required:true,
        type:String
    },
    imageAlt:{
        required:true,
        type:String
    },
    situation:{
        required:true,
        type:Boolean
    },
    link:{
        required:true,
        type:String
    },
});
module.exports = mongoose.Model("MidleBanner", MiddleBanners)
























