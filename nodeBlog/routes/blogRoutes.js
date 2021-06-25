const express = require('express')
//işlemleri router üzerinden gerçekleştireceğiz.
const router = express.Router()
const Blog = require('../models/blogs')
const blogController = require('../controllers/blogController')

router.get('/',blogController.blog_index
/*,(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'Anasayfa',blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    })
}*/
)

router.get('/:id',blogController.blog_content
/*,(req,res)=>{
    const id = req.params.id
    //console.log(id)
    Blog.findById(id)
        .then((result)=>{
            res.render('blog',{blog:result,title:'Detay'})
        })
        .catch((err)=>{
            res.status(404).render('404',{title:'Sayfa bulunamadı.'})
            console.log(err);
        })
}*/
)

module.exports = router