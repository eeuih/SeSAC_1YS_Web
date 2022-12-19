const { zwMap } = require("../model");

const { Op } = require("sequelize");
exports.main = (req,res) => { res.render("index"); }

exports.marker = async(req,res) => {
    res.render("marker");
}

// exports.dbtest = (req,res) => {
//     res.render("test");
// }

// exports.dbtest2 = async(req,res) => {
//     var test = await Test.findAll();
//     console.log(test);
//     res.send(true);
// }

exports.marker_list = async(req,res) => {


    var zwshopMap = await zwMap.findAll({
        raw: true,
    });

    // var currentLocate = {
    //     top: req.body.latlonData.swLat,
    //     left: req.body.latlonData.swLon,
    //     bottom: req.body.latlonData.neLat,
    //     right: req.body.latlonData.neLon   
    // };
   

    // var zwshopMap = await zwMap.findAll({
    //     raw: true,
    //     where: { 
    //         lat : { [Op.between]: [currentLocate.top, currentLocate.bottom]},
    //         lon : { [Op.between]: [currentLocate.left, currentLocate.right]}
    //     }
    // });
    
    //console.log("현재위치:", currentLocate);

    res.send(zwshopMap);

}








