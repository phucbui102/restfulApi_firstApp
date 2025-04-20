const express = require('express');
const route = express.Router();
const userController = require("../app/controllers/NewController");
route.get('/news',userController.index);

module.exports = route