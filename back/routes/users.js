const connexion = require("../conf.js");
const express = require("express");
const jwt = require('jsonwebtoken');
const Joi = require('joi')
const newToken = require('../helpers/generateToken.js');

let bcrypt = require('bcryptjs');
const generateToken = require("../helpers/generateToken.js");
const { number } = require("joi");
const users = express.Router();

require('dotenv').config();

users.use(express.json());

users.post('/login', (req, res) => {
  const user = {
      id: '',
      username: '',
      password: '',
      token: '',
      status: '',
  }

  connexion.query(`SELECT ID, username, password, status FROM users WHERE username='${req.body.username}' 
    AND (status='user' OR status='admin')`, (err, resultat) => {
    if (err) res.json('login error') 
    else {
      if( resultat[0] && resultat[0].password === req.body.password) {
        const token = generateToken();

        connexion.query(`UPDATE users SET token ='${token}' WHERE username='${resultat[0].username}'`, (err, result) => {
          if(err) res.json('impossible to insert token')
          else {
            console.log('nouveau token: ', token);
            
            user.id = resultat[0].ID;
            user.username = resultat[0].username;
            user.password = resultat[0].password;  
            user.token = token;
            user.status = resultat[0].status;
            
            res.json(user)
            console.log(user);
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

// users.get('/getUsers', (req, res) => {
//   connexion.query(`SELECT * FROM users`, (err, resultat) => {
//     if(err) res.json('error to fetch users')
//     else {
//       res.json(resultat)
//     }
//   })
// })

users.post('/addUsers', (req, res) => {
  console.log(req.body)
  connexion.query(`INSERT INTO users (lastname, firstname, organisation, supervisor, legalhours, contracthours, email, password, start_date, end_date) 
  VALUES ('${req.body.lastname}', '${req.body.firstname}', '${req.body.organisation}', '${req.body.supervisor}', '${req.body.legalHours}', '${req.body.contractualHours}', '${req.body.email}', '${req.body.password}', '${req.body.startDate}', '${req.body.endDate}')`, (err, result) => {
    if(err) res.json('impossible to insert users')
    else {
      // res.json("insert successfull")
      res.json(result)
    }
  })
})  


users.post('/getUser', (req, res) => {
  console.log(req.body, "getUser")
  connexion.query(`SELECT * FROM users WHERE ID='${req.body.id}'` , (err, result) => {
    if(err) res.json('error in back')
    else {
      console.log(result)
      res.json(result)
    }
  })
})

users.get('/getAllUsers', (req, res) => {
  connexion.query(`SELECT * FROM users WHERE status='user'`, (err, result) => {
    if(err) res.json('error in back')
    else {
      console.log(result)
      res.json(result)
    }
  })
})


users.post('/timesheet', (req, res) => {
  console.log(req.body, 'timesheetdatas')
  // connexion.query('INSERT INTO timesheet (')
})

// connexion.query(`SELECT username, password, status FROM users WHERE username='${req.body.username}'
//     AND (status='user' OR status='admin')`, (err, resultat) => {
//   if (err) res.json('login error')
//   else {
//     if( resultat[0] && resultat[0].password === req.body.password) {
//       const token = generateToken();
module.exports = users;
