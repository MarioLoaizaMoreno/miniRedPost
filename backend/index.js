const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Post = require("./routes/post")
const User = require("./routes/user")
const Auth = require("./routes/auth")
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/post", Post);
app.use("/api/user", User);
app.use("/api/auth", Auth);

app.listen(process.env.PORT, () =>
  console.log("Backend server running OK, on port: ", process.env.PORT)
);

dbConnection();
