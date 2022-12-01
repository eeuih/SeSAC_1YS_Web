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
    })
    // insert req.body

}