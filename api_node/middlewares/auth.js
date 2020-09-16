const jwt = require ('jsonwebtoken')

module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, 'RANDOM_TOKEN_SECRET',(err,decoded)=>{
            req.userId = decoded.userId
        })
        next()
    } catch (error) {
        res.status(401).json({message : 'Vous devez être connecté' })
    }
}

