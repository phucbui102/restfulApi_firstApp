const express = require('express');
const route = express.Router();
const PeopleController = require("../app/controllers/PeopleController");

route.post('/',PeopleController.index);

module.exports = route