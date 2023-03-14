const express = require("express");
const router = express.Router();
const {postEmployee} = require("../Controller/employeeController.js");


router.post("/post",postEmployee)

module.exports = router;
