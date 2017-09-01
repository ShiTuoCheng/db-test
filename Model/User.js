/* jshint esversion:6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Model = Schema({

    name: {type : String}
});

module.exports = mongoose.model('User', Model); 
