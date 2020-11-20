const connexion = require("../conf.js");
const express = require("express");
const jwt = require('jsonwebtoken');
const Joi = require('joi')
let bcrypt = require('bcryptjs');
const users = express.Router();

require('dotenv').config();

users.use(express.json());


const posts = [
    {
        username: "Arno",
        title: "post 1"
    },
    {
        username: "Jimmy",
        title: "post 2"
    }
]

users.get('/posts', (req, res) => {
    res.json(posts);
}) 

users.post('/login', (req, res) => {
    // see authentication User https://youtu.be/Ud5xKCYQTjM 
    const token = 'azezaezaeezar213'
    console.log(req.body)
    const user =  { name: req.body.username, password: req.body.password, token: token }
    // console.log(user, "username");
    res.status(201)
    res.json(user)
})

module.exports = users;