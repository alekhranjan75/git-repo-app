const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema that stores the githubID
const userSchema = new Schema({
    githubID: String
});

const User = mongoose.model('User', userSchema);

module.exports = User