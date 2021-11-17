const express = require("express");
const routes = require("./routes");
const session = require("express-session");
const MongoStore = require("connect-mongo");

require("dotenv").config({ path: "variables.env" });

const app = express();

app.use("/", routes());

app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE,
      useNewUrlParser: true,
    }),
  })
);

app.listen(process.env.PORT);
