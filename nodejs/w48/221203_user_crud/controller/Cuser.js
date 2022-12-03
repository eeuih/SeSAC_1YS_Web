const User = require("../model/User");

exports.mainpage = (req, res) => {
    res.render("index");
}

exports.signuppage = (req, res) => {
    res.render("signup");
}

exports.signup = (req, res) => {
    User.signup_user(req.body, function(){
        res.send(true);
    });
}

exports.login = (req, res) => {
    User.login_user(req.body, function(result){
        if ( result.length > 0) res.send(true);
        else res.send(false);
    });
}