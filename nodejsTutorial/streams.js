/**
 * Çok büyük boyutlu dosyaları okumak ve ya yazmak istediğimizde kullanırız.
 * Yayınlar olarak türkçeleştirilebilir.
 * Dosyamıza yazmak ya da okumak istediğimiz data geçici bir belleğe-bufferda tutulur.
 * Parça parça ayrılarak bize parçalar halinde döner.
 * Chunklara ayrılır.Chunk sayısı boyuta göre değişebilir.
 * Bu sayede biz işlemleri gerçekleştirebiliriz.
 * youtube daki video tamamen yüklenmemesine ragmen izlmeye başlayabiliyoruz.Bunun gibi.
 */

/**read and write stream */
let fs = require('fs')

let readStream = fs.createReadStream('./docs/test2.txt',{encoding:'utf-8'});
let writeStream = fs.createWriteStream('./docs/test3.txt')

readStream.on('data',(chunk)=>{
    console.log("-------------------new Chunk------------------------")
    console.log(chunk);
    //writeStream.write(chunk);
})

readStream.pipe(writeStream);