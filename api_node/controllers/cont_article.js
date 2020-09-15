const articleSchem = require('../models/article')

exports.ping = (req,res)=>{

  res.status(200).json({ok : 'Recu ! '})

}

exports.get_article = (req,res)=>{

    articleSchem.find({userId : req.userId })
      .then(articles => res.status(200).json(articles) )
      .catch(err =>res.status(404).json({err: err.message}))
}


exports.post_article = (req,res)=>{

    console.log('------------',req.userId)
    const article = new articleSchem({
        ...req.body,
        userId : req.userId
    })
    article.save()
        .then(()=> res.status(201).json({ok : 'Le produit à ete ajouté'}))
        .catch(error => res.status(400).json({err : error.message}))
}

exports.update_article = (req,res)=>{

    articleSchem.updateOne({_id: req.params.id, userId : req.userId},{...req.body,userId : req.userId})
        .then(() => res.status(200).json({ok : 'Le produit a ete modifié '}) )
        .catch(err =>res.status(404).json({err : err.message}))
}

exports.delete_article = (req,res)=>{

    articleSchem.deleteOne({_id: req.params.id, userId : req.userId})
        .then(() => res.status(200).json({ok : 'Le produit a ete supprimer'} )  )
        .catch(err =>res.status(404).json({err : err.message}))
}
