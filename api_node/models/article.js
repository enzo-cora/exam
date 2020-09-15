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
    userId : {
        type : String,
        required:"L'id doit être fournis ! "
    }
});

module.exports = mongoose.model('article', schemarticle)
