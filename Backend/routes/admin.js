var express = require("express");
var Router = express.Router();

var adminController = require("../controller/adminController");

var auth = require("../auth");

/* GET users listing. */

Router.post("/register/", adminController.admin_register_post);

module.exports = Router;
