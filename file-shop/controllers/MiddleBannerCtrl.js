
const MiddleBanner = require('../models/MiddleBanners');

const getAllMiddBann = async (req, res) => {
    try {
        if (req.query.pn) {
            const paginate = 2
            const pageNumber = req.query.pn;
            const goalMidbans = await MiddleBanner.find().sort({ _id: -1 }).skip((pageNumber - 1) * paginate).limit(paginate);
            const allMidbanNum = await (await MiddleBanner.find()).length;
            res.status(200).json({ goalMidbans, allMidbanNum });
        } else {
            const AllMidBan = await MiddleBanner.find();
            res.status(200).json(AllMidBan)
        }

    }
    catch (error) {
        console.log(error);
        res.status(200).json({ msg: 'error ' })
    }
}
module.exports.getAllMiddBann = getAllMiddBann;

const NewMidBan = async (req, res) => {
    try {
        const NewMidBanner = new MiddleBanner({
            image: req.body.image,
            imageAlt: req.body.imageAlt,
            situation: req.body.situation,
            link: req.body.link,
            date: new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        });
        NewMidBanner.save().then(d => {
            res.status(200).json({ msg: 'بنرمیانی باموفقیت ذخیره شد!' })
        }).catch(err => {
            console.log(err);
            res.status(400).json({ msg: 'خطا درذخیره بنرمیانی' })
        })
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ msg: 'error ' })
    }
}
module.exports.NewMidBan = NewMidBan;

const updateMidBan = async (req, res) => {
    try {
        await MiddleBanner.updateOne(
            { _id: req.body.goalId },
            {
                $ser: {
                    image: req.body.image,
                    imageAlt: req.body.imageAlt,
                    situation: req.body.situation,
                    link: req.body.link,
                    date: new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
                }
            }
        )
        res.status(200).json({ msg: 'بنرمیانی باموفقیت به روز رسانی شد.' })
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ msg: 'error'})
    }
}
module.exports.updateMidBan = updateMidBan;

const deleteMidBan = async (req, res) => {
    try {
        await MiddleBanner.deleteOne(
            { _id: req.body.goalId },
        )
        res.status(200).json({ msg: 'بنرمیانی باموفقیت حذف شد.' })
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ msg: 'error'})
    }
}
module.exports.deleteMidBan = deleteMidBan;