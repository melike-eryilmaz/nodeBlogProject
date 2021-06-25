/**
 * Nodejs içerisinde tanımlanmış module ler var.
 * Bunları kullanabiliriz.
 * Tanımlanmış module paketlenip içerisinde tutulur ve biz bu paketleri kullanırız.
 */

/*
let os = require('os')//Projemize Operation system -işletim sistemi özelliklerini içeren node altında bulunan os paketini dahil ediyoruz.

console.log(os)//os paketi altında tutulan özellikleri ve func ları görürüz.

console.log(os.platform(),os.homedir())*/

let fs = require('fs')//file system paketi dosya okuma yazma.

//DOSYADAN OKUMA
/*
console.log(fs)
fs.readFile('./docs/test.txt',(err,data)=>{
    if(err) throw err
    //console.log(data)//Bu şekilde buffer data döner.Okumak istediğimiz dosyanın içerisindeki data geçici bellekte tutulur .Buna buffer denir.
    console.log(data.toString())
})
*/
//UTF-8 OLARAK BELİRTİNCE TOSTRİNG E GEREK KALMAZ.
/*
fs.readFile('./docs/test.txt','UTF-8',(err,data)=>{
    if(err) throw err
    //console.log(data)//Bu şekilde buffer data döner.Okumak istediğimiz dosyanın içerisindeki data geçici bellekte tutulur .Buna buffer denir.
    console.log(data)
});*/

//DOSYAYA YAZMA
/*
fs.writeFile('./docs/test2.txt','Hellooo again',(err,data)=>{
    if(err) throw err
    console.log("writing ended succesfully.")
});
*/
//Klasör oluşturma/Silme
if(!fs.existsSync('./assets')){//existsSync dosya ya da klasör var ise true yok ise false döner.
    fs.mkdir('./assets',(err)=>{
        if(err) throw err
        console.log("folder created succesfully.")
    });
}

else{
    fs.rmdir('./assets',(err)=>{//Klasör altında dosya yok ise silme işlemi yapılabilir.
        if(err) throw err
        console.log("folder deleted successfully.")
    })
}

//Dosya silme
if(fs.existsSync('./docs/test2.txt')){
fs.unlink('./docs/test2.txt',(err)=>{
    if(err) throw err
    console.log("file deleted succesfully.")
});
}