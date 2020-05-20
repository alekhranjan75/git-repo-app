const passport = require('passport')
const express = require('express');
const router = express.Router();

//Calls passport controller to be used by router
require('../controller/passport')

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
        res.redirect('/');
    });

//Logout Route
router.get('/api/logout', (req, res) => {
    //request to logout
    req.logout()
    // Successful logout, redirect home.
    res.redirect('/');
    console.log("Logged Out!!!")
})

//Get the current User deatils
router.get('/api/current_user', (req, res) => {
    //Current user
    res.send(req.user)
});

module.exports = router