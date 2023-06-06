const express = require("express");
const { loginRouter } = require("./login.js");
const passport = require("passport");
require("./google.js");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(passport.initialize());

// ROUTES

app.use(
  "/auth",
  passport.authenticate("auth-google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    session: false,
  }),
  loginRouter
);

app.listen(3000, () => console.log("http://localhost:3000"));