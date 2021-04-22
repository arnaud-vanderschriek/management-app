const connexion = require("../conf.js");
const express = require("express");
const jwt = require('jsonwebtoken');
const Joi = require('joi');
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
      startDate: '',
      endDate: '',
      idProject: '',
  }

  connexion.query(`SELECT ID, username, password, status, start_date, end_date, id_project FROM users WHERE username='${req.body.username}' 
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
            user.startDate = resultat[0].start_date;
            user.endDate = resultat[0].end_date;
            user.idProject = resultat[0].id_project;
        
            res.json(user)
            console.log(user, 'pls');
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
  connexion.query(`INSERT INTO project(project_name, project_code, month, start_date, end_date, hours, budget) 
  VALUES('${req.body.projectName}', '${req.body.projectCode}', '${req.body.month}', '${req.body.startDate}', '${req.body.endDate}', '${req.body.hours}', '${req.body.budget}')`, (err) => {
    if(err) res.json('impossible to insert project')
    else {
      connexion.query(`SELECT ID FROM project WHERE project_name = '${req.body.projectName}'`, (err, result) => {
        if(err) res.json('somethings wrong')
        else {

          for(let i = 0; i < req.body.usersOnProject.length; i ++) {

            connexion.query(`SELECT ID from users WHERE firstname='${req.body.usersOnProject[i]}'`, (err, resultat) => {
              if(err) res.json('beubeubeu')
              else {
                console.log(' var result dans le dernier else: ', result)
                console.log(' var resultat dans le dernier else: ', resultat)
                  connexion.query(`INSERT INTO projectUsers(id_project, id_user) 
                  VALUES('${result[i].ID}', '${resultat.ID}')`, (err, lastResult) => {
                    if(err) res.json("ceci n'a pas abouti")
                    // else {
                    //   res.json('yesssssay')
                    // }
                  })
                }
              }
            )
          }
        }
      })
      res.json("insert successfull")
    }
  })
})

users.post('/getProject', (req, res) => { 
  console.log(req.body.id,'project')
  connexion.query(`SELECT * FROM projectUsers INNER JOIN project ON projectUsers.id_project = project.ID`, (err, result) => {
    if(err) res.json("impossible d'associer un user a un projet")
    else {
      let response = []

      for(let i = 0; i < result.length; i++) {
       if(result[i].id_user === req.body.id)
        response.push(result[i].project_name)
      }
      console.log(response)
     res.json(response)
    }
  })
  // connexion.query(`SELECT * FROM project WHERE ID=${req.body.id}`, (err, resultat) => {
  //   if(err) res.json('error to fetch users')
  //   else {
  //     console.log(resultat, 'resultat du fetch project')
  //     res.json(resultat)
  //   }
  // })
})

// SELECT * FROM projectUsers INNER JOIN project ON projectUsers.id_project = project.ID

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
  connexion.query(`INSERT INTO timesheet (start_date, end_date, project, task, Mon, Tue, Wed, Thu, Fri,  user_id)
  VALUES ('${req.body.startDate}', '${req.body.endDate}','${req.body.projet}', '${req.body.task}', '${req.body.mon}', '${req.body.tue}', '${req.body.wed}', '${req.body.thu}', '${req.body.fri}', '${req.body.userID}')`, (err, result) => {
    if(err) res.json("impossible to insert timesheet")
    else {
      res.json("insert successfull")
      // res.json(result)
    }
  })
})

module.exports = users;
