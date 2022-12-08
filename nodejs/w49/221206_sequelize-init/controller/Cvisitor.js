// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");
//객체 구조 분해 할당


exports.visitor = async(req, res) => {
    let result = await Visitor.findAll();
    res.render("visitor", {data: result});
}

// ---- promise ---- 
//     Visitor.findAll()
//     .then((result)=>{
//      console.log(result);
//      console.log("id", result[0].id); 배열의 값으로 접근
//      res.render("visitor", {data: result});}) 

//---- not sequelize ----
//     Visitor.get_visitor(function(result){
//         console.log(result);
//         res.render("visitor", {data: result});})

exports.register = async(req, res) => {
    let data = { name: req.body.name, comment: req.body.comment }
    let result = await Visitor.create(data);
    res.send(String(result.id));
}

// ---- promise ----
// exports.register = (req, res) => {
//     let data = { name: req.body.name, comment: req.body.comment }
//     Visitor.create(data)
//     .then((result)=>{
//         console.log(result);
//         res.send(String(result.id));})

//---- not sequelize ----
//     Visitor.register_visitor( req.body, function(id){
//     console.log(id);
//     res.send(String(id));})

exports.delete = async(req, res) => {
    let result = await Visitor.destroy({where : {id: req.body.id}});
    res.send(true);
}

// ---- promise ----
// exports.delete = (req, res) => { 
//     Visitor.destroy({where : {id: req.body.id}
//     }).then((result)=>{
//         console.log(result);
//         res.send(true);})

//---- not sequelize ----
//     Visitor.delete_visitor(req.body.id, function(){
//         res.send(true);})


exports.get_visitor_by_id = async(req, res) => {
    let result = await Visitor.findOne(
        {where : { id: req.query.id }});
    res.send(result);
}

// ---- promise ----
// Visitor.findOne({where : { id: req.query.id }})
// .then((result) => {res.send(result);})

//---- not sequelize ----
// select * from visitor where id = req.query.id; sql문
// Visitor.get_visitor_by_id_model(req.query.id, function(rows){
//     res.send(rows);});
    

exports.update_visitor = async(req, res)=> {
    let data = { name: req.body.name, comment: req.body.comment }
    let result = await Visitor.update(data, {where : {id: req.body.id}});
    res.send(true);
}

// ---- promise ----
// exports.update_visitor = (req, res) => {    
//     let data = { name: req.body.name, comment: req.body.comment }
//     Visitor.update(data, { // 대상, 옵션
//         where: {id: req.body.id}
//     }).then((result)=>{
//         console.log(result);
//         res.send(true);
//     })
// }

//---- not sequelize ----
//     Visitor.update_visitor(req.body, function(){
//         res.send(true);});
