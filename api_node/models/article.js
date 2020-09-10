let mongoose = require('mongoose')

const schemarticle = mongoose.Schema({
    name : {
        type : String,
        required:"Vous devez entrer le nom de l'article"
    },
    complete : {
        type : Boolean,
        default : false
    },
});

module.exports = mongoose.model('article', schemarticle)
