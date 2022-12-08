const { Users } = require("../model");

exports.index = (req,res) => { res.render("index"); }
exports.signup = (req,res) => { res.render("signup"); }

exports.post_signup = async(req,res) => {
    let data = {id: req.body.id, pw: req.body.pw, name: req.body.name};
    let result = await Users.create(data);
    console.log(result);
    res.send(true);
}

exports.signin = (req,res) => { res.render("signin"); }

exports.post_signin = async(req,res) => {
    let result = await Users.findOne({
        where : {id: req.body.id, pw: req.body.pw}
    });
    if (result !== null) res.send(true);
    else res.send(false);
}


exports.profile = async(req,res) => {
    let result = await Users.findOne({
        where : {id : req.body.id}
    });
    if (result !== null) res.render("profile", {data: result});
    else res.redirect("/user/signin");
}


exports.profile_edit = async(req,res) => {
    let data = { id: req.body.id, pw: req.body.pw, name: req.body.name}
    let result = await Users.update(data, {where: {id: req.body.id}});
    res.send(true);
}

exports.profile_delete = async(req, res) => {
    let result = await Users.destroy({where : {id: req.body.id}});
     res.send(true);}

// exports.profile_delete = (req, res) => {
//     Users.destroy({where : {id: req.body.id}})
//     .then(()=>{res.send(true);})
// }