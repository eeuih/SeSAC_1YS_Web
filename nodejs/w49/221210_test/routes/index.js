var express = require("express");
var controller = require("../controller/Ctest");
const router = express.Router();

router.get("/", controller.main);
router.get("/marker", controller.marker);
router.post("/marker", controller.marker_list);

module.exports = router;
