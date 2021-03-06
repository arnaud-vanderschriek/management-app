const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(
    cors({
        origin: '*',
    })
)

app.use(bodyParser.json({ limit: "10mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.listen(port, "localhost", () => {
    console.log(`listening on port ${port}`);
})

process.on("uncaughtException", function (err) {
    console.log(err);
  });