/**
 * Server kurulumu ve yönetimi
 * Normalde sunucu tarafında kullandıgımız dillerde herhangi bir server kurulumu gerçekleştirmiyoruz.
 * Nodejs de server ı kurup yönetmemiz gerekiyor.
 * Normalde expğress gibi dışardan paketleri kullanarak da kolayca kurabiliriz.
 * İlk olarak http prokolünü kurmamız gerekiyor.
 */
//http modulünü prejemize ekliyoruz.
const http = require('http');
//file system
const fs = require('fs');

//serverımızı oluşturuyoruz.request ve response nesnelerimizi burada yönetebiliriz.
const server = http.createServer((req,res)=>{
    //request nesnesi
    //browser dan gelen request objesidir.
    //İçerisinde çeşitli özellikler vardır.Biz sıklıkla url ve method a bakarız.
   // console.log(req,req.url,req.method);
    //console.log('istek geldi.');
/*
    //Response nesnesi :Cevabı döndürürken kullanılan nesendir.
    //response content type ve geriye dönüş tipini belirtiyoruz.
    res.setHeader('Content-Type','text/plain')
    //response içerisine yazıyoruz.
    res.write('merhaba')
    //response bittiğini belirtiyoruz.
    //Tarayıcıdan response a verdiğimiz özellikleri kontrol edebiliriz.
    res.end()
*/
/*
    res.setHeader('Content-Type','text/html');
    res.write('<head><title>helloooo nodejs bro</title></head>');
    res.write('<h1>merhabaaa</h1>');
    res.end();
 */

    res.setHeader('Content-Type','text/html')
    /**ROUTİNG /YÖNLENDİRME */
    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200//başarılı kodu
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-us'://about-us route geldiğinde about sayfasına yönlendiriyoruz.
            res.statusCode = 301//yönlendiriliyor  kodu
            res.setHeader('Location','/about')
            break
        default:
            path += '404.html'
            res.statusCode = 404//sayfa bulunamadı hata kodu
            break
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.end(data)
        }
    })

 /*
    //HTML DOSYASINI RESPONSE OLARAK DÖNME
    res.setHeader('Content-Type','text/html')
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            //res.write(data)
            //sadece tek bir dosya dönecekse direkt end içerisinde verebiliriz.
            res.end(data)
        }
    })
*/

});
//Server a gelen isteklerimizi dinliyoruz.
server.listen(3000,'localhost',()=>{
    console.log('3000 portu dinleniyor.');
});

