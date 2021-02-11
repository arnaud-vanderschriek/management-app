const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require("./routes/users");

const app = express();
const port = 8000;

app.use(
    cors(
        {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 200
        }
    )
)

app.use(bodyParser.json({ limit: "10mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
// app.use(express.json());

app.use("/users", users);

app.listen(port, "localhost", () => {
    console.log(`listening on port ${port}`);
})

process.on("uncaughtException", function (err) {
    console.log(err);
  });
