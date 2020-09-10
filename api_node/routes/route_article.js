const express = require('express')
const router = express.Router()
const cont_article = require('../controllers/cont_article')


router.get('/ping',cont_article.ping)

router.get('/',cont_article.get_article)
router.post('/add', cont_article.post_article )
router.put('/update/:id', cont_article.update_article )
router.delete('/delete/:id', cont_article.delete_article )



module.exports = router
