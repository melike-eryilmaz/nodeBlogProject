const express = require('express')
//işlemleri router üzerinden gerçekleştireceğiz.
const router = express.Router()
//adminController
const adminController = require('../controllers/adminController')
// const Blog = require('../models/blogs') admincontroller içerisine taşındı.

router.get('/',adminController.admin_index
/*admincontroller içerisine taşındı.
,(req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('admin',{title:'Admin',blogs:result})
        })
        .catch((err)=>{
            console.log(err);
        })
}
*/
)

//yeni yazı ekleme post
router.get('/add',adminController.admin_add
// ,(req,res)=>{
//     res.render('add',{title:'Yeni yazı'})
// }
)

router.post('/add',adminController.admin_add_post
   /* //console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result)=>{
            res.redirect('/admin')
        })
        .catch((err)=>{
            console.log(err);
        })
}*/
)

//delete işlemi
router.delete('/delete/:id',adminController.admin_delete
/*,(req,res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({link:'/admin'})
        })
        .catch((err)=>{
            console.log(err);
        })
}*/
)


module.exports = router