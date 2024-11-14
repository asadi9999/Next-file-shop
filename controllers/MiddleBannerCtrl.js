
const MiddleBanner= require('../models/MiddleBanners');

const getAllMiddBann = async(req,res) => {
    try {
        const AllMidBan = await MiddleBanner.find();
        res.status(200).json(AllMidBan)
    } 
    catch (error) {
        console.log(error);
        res.status(200).json({msg:'error '})
    }
}
module.exports.getAllMiddBann=getAllMiddBann


































