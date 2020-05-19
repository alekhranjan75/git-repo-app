if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prodProps')
} else {
    module.exports = require('./devProps')
}