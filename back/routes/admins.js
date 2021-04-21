const express = require("express");
const admins = express.Router();

require('dotenv').config();

admins.use(express.json());


module.exports = admins;
