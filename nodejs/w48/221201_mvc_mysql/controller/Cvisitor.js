const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
    Visitor.get_visitor(function(result){ // 콜백함수를 인자로 넘겨줌 
        console.log(result);
        res.render("visitor", {data: result}); // visitor.ejs 렌더하고 data : result 값을 넘겨준다.
    });
}

exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function(id){ // 인자 2개 
        console.log(id); // 쿼리를 날려서 나온 결과값
        res.send(String(id)); // resultID가 나옴
    });
    // insert req.body

}

exports.delete = (req, res) => {
    Visitor.delete_visitor(req.body.id, function(){
        res.send(true);
    });

}

exports.get_visitor_by_id = (req, res) => {
    // req.query.id에 해당하는 데이터를 조회 
    // 서버 응답 > 조회한 데이터 
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){
        res.send(rows);
    });

}

exports.update_visitor = (req, res) => {
    // 받아 온 req.body 데이터를 mysql에 update 할 수 있도록
    // 서버 응답
    Visitor.update_visitor(req.body, function(){
        res.send(true);
    });

}