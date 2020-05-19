const passport = require('passport')
const express = require('express');
const router = express.Router();

require('../controller/passport')

router.get('/auth/git',
    passport.authenticate('github', {
        scope: ['profile', 'email']
    }));

router.get('/auth/git/callback',
    passport.authenticate('github', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

router.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/');
    console.log("Logged Out!!!")
})
router.get('/api/current_user', (req, res) => {
    res.send(req.user)
});

module.exports = router