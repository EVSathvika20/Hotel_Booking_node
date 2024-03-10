const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const hbs = require('hbs')
const path = require('path')
const app = express()
console.log(path.join(__dirname));
const jwt = require('jsonwebtoken');
app.set('view engine', 'hbs');
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

var env = require('./config/environment');
const port = env.port;

app.get('/', (req, res) => {
    res.send('<center><h1>HOTEL API Portal</h1><img src="https://i.ytimg.com/vi/T0DmHRdtqY0/maxresdefault.jpg"></center>')
})

let node_env = process.env.NODE_ENV;

var hotel = require("./routes/hotelRouter")
var booking = require("./routes/bookingRouter")
var users = require("./routes/userRouter")


app.use("/api/hotel",hotel);
app.use("/api/booking",booking);
app.use("/api/users",users);






app.use("*", (req, res, next) => {
    res.send({ status: 404, 'Message': 'End point not registered' });
})
app.listen(port, () => {
    console.log(`environment set for ${node_env}`)
    console.log(`Example app listening on port ${port}`)
})