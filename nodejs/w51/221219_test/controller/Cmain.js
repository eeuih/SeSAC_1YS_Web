//const main = require('../model/index');

exports.main = (req, res) => {
  // if (req.session.user) res.render("main", {isLogin: true});
  // else res.render("main", {isLogin : false});
  res.render('main');
 };

// exports.mainC = (req, res) => {
//   // req.params.type
//   res.render(req.params.type, { type: req.params.type });
// };
