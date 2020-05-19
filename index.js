const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const mongoURI = require('./config/properties').mongoURI;
const cookieKey = require('./config/properties').cookieKey
const authRoutes = require('./routes/authRoutes')

const app = express()

mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) throw err;
            console.log('Successfully connected to database');
        }
    )
    .then(() => console.log("Success"))
    .catch(() => console.log("Something went wrong"))
app.use(bodyParser.json())

//It extracts the cookie Data
app.use(cookieSession({
    keys: [cookieKey],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

//middle-ware that  initializes passport
app.use(passport.initialize());
// another middleware that alters the request object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object
// passport.session() calls deserializeUser on each request,
app.use(passport.session());
app.use('/', authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Node app is running on port', PORT);
})