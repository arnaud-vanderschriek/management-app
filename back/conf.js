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
    if (err) throw err;
    console.log("you are connected to the database !");
})