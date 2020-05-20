const passport = require('passport')
const express = require('express');
const router = express.Router();

//Calls passport controller to be used by router
require('../controller/passport')

// Redirect Path
let redirectPath  = 'http://localhost:3000/'
if (process.env.NODE_ENV === 'production') {
    redirectPath = '/'
}

//Login Url
router.get('/auth/git',
    passport.authenticate('github', {
        scope: ['profile', 'email']
    }));

//Login Callback URL
router.get('/auth/git/callback',
    passport.authenticate('github', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect(redirectPath);
    });

//Logout Route
router.get('/api/logout', (req, res) => {
    //request to logout
    req.logout()
    // Successful logout, redirect home.
    res.redirect(redirectPath);
    console.log("Logged Out!!!")
})

//Get the current User deatils
router.get('/api/current_user', (req, res) => {
    //Current user
    res.send(req.user)
});

module.exports = router