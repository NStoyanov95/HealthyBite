const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const app = express();
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(express.json());

app.use(routes);

mongoose
  .connect("mongodb://localhost:27017/healthyBite")
  .then(() => console.log("db connected!"));
app.listen(3000, () => console.log("Server listening on port 3000..."));
