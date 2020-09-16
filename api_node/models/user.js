//Appels Modules
const mongoose = require('mongoose')
const unique_validator = require('mongoose-unique-validator')
mongoose.set('useCreateIndex',true)

//Shemas

const userSchema = mongoose.Schema({
    mail : {type : String, require : true, unique : true},
    mdp : {type : String, require : true},
    name : {type : String, default : 'NoName'},
    created_date : {type:Date, default : Date.now }
})

userSchema.plugin(unique_validator)
module.exports = mongoose.model('users',userSchema)
