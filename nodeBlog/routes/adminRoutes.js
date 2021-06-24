const express = require('express')
//işlemleri router üzerinden gerçekleştireceğiz.
const router = express.Router()
const Blog = require('../models/blogs')

router.get('/admin',(req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('admin',{title:'Admin',blogs:result})
        })
        .catch((err)=>{
            console.log(err);
        })
})

//yeni yazı ekleme post
router.get('/admin/add',(req,res)=>{
    res.render('add',{title:'Yeni yazı'})
})

router.post('/admin/add',(req,res)=>{
    //console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result)=>{
            res.redirect('/admin')
        })
        .catch((err)=>{
            console.log(err);
        })
})

//delete işlemi
router.delete('/admin/delete/:id',(req,res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({link:'/admin'})
        })
        .catch((err)=>{
            console.log(err);
        })
})


module.exports = router