const { User } = require("../model/index");

const bcrypt = require("bcryptjs");



exports.join = (req, res) => { res.render("join"); };



exports.postJoin = async(req, res) => {

  let data = {
    user_email : req.body.user_email,
    user_pw : req.body.user_pw, 
    user_name : req.body.user_name
  }

console.log(data);

   let result = await User.create(data);
   console.log(result);
   res.send(true);
 
  };


//
exports.login = (req, res) => {
  let sessionInputData = req.session.inputData; 

  if(!sessionInputData) {
    sessionInputData = {
        hasError: false,
        email: "",
        pw: "",
    };
  }

  req.session.inputData = null;
  res.render("login", {sessionInputData});
};



exports.postLogin = async (req, res) => {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.password;

  let existingUser = await User.findOne({
    where: { email: req.body.email }});

  if (!existingUser) {
    req.session.inputData = {
        hasError: true,
        message: "로그인을 할 수 없습니다. 다시 한번 시도해주세요.",
        email: enteredEmail,
        password: enteredPassword,
    };
    req.session.save(function() {
        res.redirect("/zerowave/login");
    });
    return;
  }

  const passwordAreEqual = await bcrypt.compare(enteredPassword, existingUser.password);

  if(!passwordAreEqual) {
    req.session.inputData = {
        hasError: true,
        message: "로그인을 할 수 없습니다. 다시 한번 시도해주세요.",
        email: enteredEmail,
        password: enteredPassword,
    };
    req.session.save(function() {
        res.redirect("/zerowave/login");
    });
    return;
  }

  // req.session. ~~~~~

};




exports.mypage = async (req, res) => {
  let result = await User.findOne({ where: { email: req.body.email } });
  if (result) res.render("mypage", { data: result });
  else res.redirect("/zerowave/");
};

exports.mypage_edit = async (req, res) => {
  let data = {
    pw: req.body.pw,
    name: req.body.name,
  };

  let result = await User.update(data, { where: { email: req.body.email } });
  //res.send()
};

exports.mypage_delete = async (req, res) => {
  let result = await User.destroy({ where: { email: req.body.email } });
  //res.send()
};
