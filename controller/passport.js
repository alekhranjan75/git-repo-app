const passport = require('passport')
// Passport strategy for authenticating with GitHub using the OAuth 2.0 API.
const GitHubStrategy = require('passport-github').Strategy;

const properties = require('../config/properties')
const User = require('../models/User')

const GITHUB_CLIENT_ID = properties.gitHubClientID;
const GITHUB_CLIENT_SECRET = properties.gitHubClientSecret;

// The user id (you provide as the second argument of the done function) is saved in the session and is later used to retrieve the whole object via the deserializeUser function.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

// Configure Strategy The GitHub authentication strategy authenticates users using a GitHub account and OAuth 2.0 tokens.
//For more documentation visit- http://www.passportjs.org/packages/passport-github/
passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: '/auth/git/callback',
        proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        //Search in Database for the current profile id
        User.findOne({
                githubID: profile.id
            })
            .then(existingUser => {
                if (existingUser) {
                    //We already have that user
                    console.log("User Already exist!!!")
                    done(null, existingUser)
                } else {
                    //If it's a new user save to database
                    new User({
                            githubID: profile.id
                        })
                        .save()
                        .then(user => done(null, user))
                }
            })
            .catch(err => console.log(err))
    }
));