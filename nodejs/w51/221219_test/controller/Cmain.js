//const main = require('../model/index');
const { zwMap } = require("../model");
const { User } = require("../model");
const { Op } = require("sequelize");


exports.main = (req, res) => {
  // if (req.session.user) res.render("main", {isLogin: true});
  // else res.render("main", {isLogin : false});
  res.render('main');
 };


 exports.selecttest = (req, res) => {
  res.render('selecttest');
 };

 exports.mapData =  async(req,res) => {
  var zwshopMap = await zwMap.findAll({
      raw: true,
  });

  res.send(zwshopMap);

}


exports.userData =  async(req,res) => {

  var userData = await User.findAll({
      raw: true,
  });
  
  res.send(userData);

}