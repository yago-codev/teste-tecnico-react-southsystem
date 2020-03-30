const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

require("./src/config/database");

const usersRouter = require("./src/app/routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", usersRouter);

module.exports = app;
