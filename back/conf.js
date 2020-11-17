const mysql = require('mysql');

const connexion = mysql.createConnection({
    host: "localhost",
    user: "wmb-db",
    password: "1234",
    database: "management",
    port: 3306,
    insecureAuth: false,
});

connexion.connect(function (err) {
    if (err) throw err("there is a problem with the database connexion");
    console.log("you are connected to the database !");
})