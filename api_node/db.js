const mongoose = require('mongoose')

const {
    MONGO_PORT,
    MONGO_DB,
    MONGO_HOSTNAME,
    MONGO_INITDB_USERNAME,
    MONGO_INITDB_PASSWORD
} = process.env

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}
const url = `mongodb://${MONGO_INITDB_USERNAME}:${MONGO_INITDB_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`

mongoose.connect(url,options).then(()=>{
    console.log('MA BASE MONGO EST CONNECTE ET ECOUTE SUR : ',url)
})
    .catch((err)=>{
        console.log('IL Y A UNE UNE ERREUR DE BASE DE DONNE !! : '," VOICI L'URL : ",url," T VOICI L'ERREUR : ",err)
    })
