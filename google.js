const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { config } = require("dotenv");
config();

const emails = ["aperez71@uabc.edu.mx"];

passport.use(
  "auth-google",
  new GoogleStrategy(
    {
      clientID: '209377064400-e93vn88m8ccnklndrembuuqf3fgu9rn9.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: "http://localhost:8081/tabla",
    },
    function (accessToken, refreshToken, profile, done) {
      const response = emails.includes(profile.emails[0].value);
      // IF EXITS IN DATABASE
      if (response) {
        done(null, profile);
      } else {
        // SAVE IN DATABASE
        emails.push(profile.emails[0].value);
        done(null, profile);
      }
    }
  )
);