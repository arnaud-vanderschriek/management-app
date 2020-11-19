const express = require('express');
const bodyParser = require('body-parser');
const users = require("./routes/users");
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
app.use(express.json());

app.use("/users", users);
// testing route /post WARNING this is must be set up in route folder that's not created anymore

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
 
app.get('/posts', (req, res) => {
    res.json(posts);
}) 

app.post('/login', (req, res) => {
    // see authentication User https://youtu.be/Ud5xKCYQTjM 

    const username = req.body.username
})

// ---------------------------------------------------

app.listen(port, "localhost", () => {
    console.log(`listening on port ${port}`);
})

process.on("uncaughtException", function (err) {
    console.log(err);
  });