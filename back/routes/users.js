const connexion = require("../conf.js");
const express = require("express");
const jwt = require('jsonwebtoken');
const Joi = require('joi')
const newToken = require('../helpers/generateToken.js');

let bcrypt = require('bcryptjs');
const generateToken = require("../helpers/generateToken.js");
const users = express.Router();

require('dotenv').config();

users.use(express.json());

users.post('/login', (req, res) => {
  const user = {
      username: '',
      password: '',
      token: '',
      status: '',
  }

  connexion.query(`SELECT username, password, status FROM users WHERE username='${req.body.username}' 
    AND (status='user' OR status='admin')`, (err, resultat) => {
    if (err) res.json('login error') 
    else {
      if( resultat[0] && resultat[0].password === req.body.password) {
        const token = generateToken();

        connexion.query(`UPDATE users SET token ='${token}' WHERE username='${resultat[0].username}'`, (err, result) => {
          if(err) res.json('impossible to insert token')
          else {
            console.log('nouveau token: ', token);

            user.username = resultat[0].username;
            user.password = resultat[0].password;  
            user.token = token;
            user.status = resultat[0].status;
            
            res.json(user)
          }
        })
      } else {
          res.json('error, pas de compte associé');
      }   
    }
  })
 
  res.status(201)
})

users.post('/token/verify', (req, res) => {
  console.log('yataa: ');
  res.json({data: "yop"});
})

users.post('/dataProject', (req, res) => {
  console.log("project:", req.body)
  connexion.query(`INSERT INTO project(project_name, project_code, month, start_date, end_date) 
  VALUES('${req.body.projectName}', '${req.body.projectCode}', '${req.body.month}', '${req.body.startDate}', '${req.body.endDate}')`, (err) => {
    if(err) res.json('impossible to insert project')
    else {
      res.json("insert successfull")
    }
  })
})

users.get('/getUsers', (req, res) => {
  connexion.query(`SELECT * FROM users WHERE status = 'user'`, (err, resultat) => {
    if(err) res.json('error to fetch users')
    else {
      res.json(resultat)
    }
  })
})
// connexion.query(`SELECT username, password, status FROM users WHERE username='${req.body.username}'
//     AND (status='user' OR status='admin')`, (err, resultat) => {
//   if (err) res.json('login error')
//   else {
//     if( resultat[0] && resultat[0].password === req.body.password) {
//       const token = generateToken();
module.exports = users;
