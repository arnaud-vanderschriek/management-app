const connexion = require("../conf.js");
const express = require("express");
const jwt = require('jsonwebtoken');
const Joi = require('joi')

let bcrypt = require('bcryptjs');
const users = express.Router();

require('dotenv').config();

users.use(express.json());

users.post('/login', (req, res) => {
  const user = {
      username: '',
      password: '',
      token: '',
  }
  
  connexion.query(`SELECT username, password, status FROM users WHERE username='${req.body.username}' 
    AND (status='user' OR status='admin')`, (err, result) => {
    if (err) res.json('login error')    
    else {
      if( result[0] && result[0].password === req.body.password) {
          user.name = req.body.username;
          user.password = req.body.password;  
          user.token = jwt.sign(user.token, process.env.ACCESS_TOKEN_SECRET);

          res.json(user)

      }else {
          res.json('error, pas de compte associé');
      }   
    }
  })
    // see authentication User https://youtu.be/Ud5xKCYQTjM 
  res.status(201)

})

module.exports = users;