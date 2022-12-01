var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); // 라우터의 함수를 불러올 때 주의해야한다. 
router.get("/test", controller.test);


router.post("/postForm", controller.post);

// 실습
router.get("/login", controller.login);
router.post("/login", controller.login2);
router.post("/login2", controller.login22);

module.exports = router;