/**
 * express ile geliştirme yaparken ilk ana dosyamızın adı app.js olur.
 */

const express = require('express');
const morgan = require('morgan')
//mongodb bağlantısı için gerekli kütüphane mongoose
const mongoose = require('mongoose')

//Model imizi projemize dahil ediyoruz.
const Blog = require('./models/blogs')

//adminRoutes
const adminRoutes = require('./routes/adminRoutes')

//blogRoutes
const blogRoutes = require('./routes/blogRoutes')
//authRoutes
const authRoutes = require('./routes/authRoutes')

//express apimizi başlatıyoruz.
const app = express()

//db bağlantısı
const dbUrl= 'mongodb+srv://melike:asd123@nodeblog.bzxt0.mongodb.net/node-blog?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology:true })
.then((result)=>{
    console.log('bagalntı basarılı');
    app.listen(3000);

}).catch((err)=>console.log(err));

/**Kullanacağımız görüntü motorunu tanımlıyoruz. 
 * Artık html değil ejs dosyaları geriye döneceğiz..
*/
app.set('view engine','ejs')

//portumuzu belirtmemiz yeterli.
//app.listen(3000)

//app.get ile hangi url e istek atıldı yakalayabiliriz.
//express bizim döndüğümüz parametrelere göre content-type vs ayaralar.setHeader() yapmaya gerek kalmaz.
/*
app.get('/',(req,res)=>{
    res.send('<h1>Anasayfa</h1>')
})

*/


//Sadece html dönme 
//Dosya dönme
/*
//root umuzu başlangıç klasörü olarak veriyoruz.
app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root: __dirname})
})


app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root: __dirname})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

//Hiçbir method çalışmadıgında çalışması gerektigi için en sona yazamlıyız.
//Çünkü use ile yazılan kodlar senkron olarak çalışır.
//Yani arkasından gelen kod blogunun çalışmasını engeller.
//statuscode zincir yapı ile verebiliriz.
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root: __dirname})
})

*/
/**
 * Template kullanımı
 * Görüntü motorları ,view engine ,templateler
 * İçerisine javascript kodlarımızı gömebilmek için templatelerden yararlanırız.
 * handlebars,ejs,pug gibi..
 * Eğer projemizde html ile javascripti yürütüyorsanız bir görüntü motoru belirtmeye gerek yok.
 */


// //ara katman before morgan
// app.use((req,res,next)=>{
//     console.log(req.method);
//     next();//Ara katmandan sonraki kod bloguna geç.
// })

//static olarak erişime açık klasör belirleme
app.use(express.static('public'))

//data parse için
app.use(express.urlencoded({extended:true}))//entended : true iç içe objeler olabilir demektir.




//ara katman morgan
app.use(morgan('tiny'))//loglama
app.use(morgan('dev'))//loglama

//Mongodb veri kaydetme && Görüntüleme
app.get('/add',(req,res)=>{
    const blog= new Blog({
        title:'Yeni yazı 2',
        short:'Kısa acıklama',
        long:'uzun aciklama'
    })
    //kaydetme
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
})

//databse üzerindeki tüm kayıtları getirme 
app.get('/all',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})


//Tek bir kaydı getirme 60cfa52022167c2ac88a2721
app.get('/single',(req,res)=>{
    Blog.findById('60cfa52022167c2ac88a2721')
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        })
})




//EJS İLE JAVASCRİPT TARAFINI YÖNETME
//artık sendfile ile değil direkt render ile render edilecek dosya ismini veriyoruz.
app.get('/',(req,res)=>{
    //app içerisinden değerleri gönderme title.
    //res.render('index',{title:'Anasayfa'})

    /**routes eklemek için artik burada bloga yönlendiriyoruz/ */
    res.redirect('/blog');
    // Blog.find().sort({createdAt:-1})
    //     .then((result)=>{
    //         res.render('index',{title:'Anasayfa',blogs:result})
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
})



/* adminRoutes altına taşındı.
app.get('/admin',(req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('admin',{title:'Admin',blogs:result})
        })
        .catch((err)=>{
            console.log(err);
        })
})

//yeni yazı ekleme post
app.get('/admin/add',(req,res)=>{
    res.render('add',{title:'Yeni yazı'})
})

app.post('/admin/add',(req,res)=>{
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
app.delete('/admin/delete/:id',(req,res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({link:'/admin'})
        })
        .catch((err)=>{
            console.log(err);
        })
})
*/

/*blogRoutes altına taşındı.
//id üzerinden detay sayfasına yönlendirme
//: değişken geleceğini belirtir.
app.get('/blog/:id',(req,res)=>{
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
})

*/
//ara katman
//ara katman cevap dönünceye kadar çalışır.
//before morgan
// app.use((req,res,next)=>{
//     console.log(req.path);
//     next();
// })

//authRoutes
app.use('/',authRoutes)

/**Burada ayrıca bir parametre ile routeların ne ile başladıgını verebiliriz. */
//adminRoutes
//admin altından ilerleyeceğini burada belirttik.
app.use('/admin',adminRoutes)

//blogRoutes
app.use('/blog',blogRoutes)


app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about',{title:'About'})
})

/**auth içerisine taşındı. */
// app.get('/login',(req,res)=>{
//     res.render('login',{title:'Giriş'})
// })


app.use((req,res)=>{
    res.status(404).render('404',{title:'Sayfa bulunamadı.'})
})