/* jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Model = Schema({

    title: {type : String},
    image: {type: String},
    content: {type: String}
});

module.exports = mongoose.model('Article', Model); 