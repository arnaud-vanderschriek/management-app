const connexion = require("../conf.js");
const jwt = require('jsonwebtoken');
const Joi = require('joi')
const users = express.Router();
var bcrypt = require('bcryptjs');
require('dotenv').config()