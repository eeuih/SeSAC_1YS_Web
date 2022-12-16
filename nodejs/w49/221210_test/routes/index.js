var express = require("express");
var controller = require("../controller/Ctest");
const router = express.Router();

router.get("/", controller.main);
router.get("/marker", controller.marker);
router.post("/marker", controller.marker_list);
//router.get("/test", controller.dbtest);
//router.post("/test", controller.dbtest2);
module.exports = router;
