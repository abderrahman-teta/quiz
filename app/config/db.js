const mongoose = require('mongoose');

mongoose.connect('mongodb://abderrahman:abdo12345678@ds145194.mlab.com:45194/memoire');

module.exports = mongoose;