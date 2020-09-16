//Les require
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserSchema = require('../models/user')

//Les routes
exports.postRegister =(req,res)=>{
    bcrypt.hash(req.body.mdp,10)
        .then(hash=>{
            const user = new UserSchema({
                ...req.body,
                mdp : hash,
            })
            user.save()
                .then(()=> {
                    res.status(201).json({success : {title : 'Bravo',message : 'Votre compte à été créé'}})
                })
                .catch(error =>  {
                    res.status(500).json({title : 'Oups ! Erreur lors de la creation du compte : ', message  : error.message})
                })
        })
}

exports.get_user = (req,res)=>{
  UserSchema.findOne({_id: req.userId}, {mdp:0})
    .then(user=> {
      res.status(200).json(user)
    })
    .catch(err =>res.status(404).json({err: err.message}))
}

exports.postConnect = (req,res)=>{
   //Vérifie le mail
    UserSchema.findOne({mail : req.body.mail})
        .then(user => {
            if(!user){
                throw "Cet utilisateur n'existe pas"
            }
            //Décode et vérifie le MDP
            bcrypt.compare(req.body.mdp,user.mdp)
                .then(valid=>{
                    if(!valid){
                        throw "Mot de passe incorrect"
                    }
                    //Crée le token
                    res.status(200).json({
                        token: jwt.sign(
                            {userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '2h'}
                        ), success : {message : 'Bienvenue ' + user.name}
                    })
                })
                .catch(error => res.status(403).json({ message  : error}))
        })
   .catch(error => res.status(403).json({ message  : error}))
}
