const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

mongoose.connect("mongodb://localhost:27017/healthyBite")
    .then(()=> console.log('db connected!'))
app.listen(3000, () => console.log("Server listening on port 3000..."));
