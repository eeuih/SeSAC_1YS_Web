var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.mainpage);
router.get("/signup", controller.signuppage);
router.post("/signup_submit", controller.signup);
router.post("/login", controller.login);
module.exports = router;
