var mongoose = require('mongoose');

var userScehema = mongoose.Schema({
    username: {type: String},
    address: {type: String},
    contact: {type: String},
    email: {type: String},

})


module.exports = mongoose.model('users',userScehema);