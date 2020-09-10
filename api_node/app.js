//----------------------------------------Les requires des modules ---------------------------------

const express = require('express')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const app = express()

//------- Require Router ---------------

const routeArticle = require('./routes/route_article')



//------------Connexion DB MongoDB------------------------
require('./db')

//-------------------MiddleWare CORS ------------------------------------------
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origian, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//-------------------Les MidleWare ------------------------------------------
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cookieparser())

//-------------------Les Routes ------------------------------------------
let router = express.Router()
app.use('/api1',router)
router.use('/assets',express.static('public'))


router.use('/article',routeArticle)

const port = process.env.API_PORT || 3000
app.listen(port,()=>{
    console.log('mon node js ecoute sur le port : ',port);
})
