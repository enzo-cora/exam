const express = require('express')
const router = express.Router()
const cont_article = require('../controllers/cont_article')
const isAuth = require('../middlewares/auth')

router.get('/ping',cont_article.ping)

router.get('/',isAuth, cont_article.get_article)
router.post('/add/',isAuth, cont_article.post_article )
router.put('/update/:id',isAuth, cont_article.update_article )
router.delete('/delete/:id',isAuth, cont_article.delete_article )



module.exports = router
