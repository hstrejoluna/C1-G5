const express = require("express");
const routes = require("./routes");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");


require("dotenv").config({ path: "variables.env" });
require("./config/db");



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routes());

/
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE,
    }),
  })
);



app.listen(process.env.PORT);
