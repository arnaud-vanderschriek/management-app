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

    const username = req.body.username
})

module.exports = users;