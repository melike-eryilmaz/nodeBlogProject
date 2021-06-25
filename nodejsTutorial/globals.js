// Arka planda kullanılabilen global nesnesi vardır.front end deki window nesnesi gibi.
//console.log(global);

//NODEJS non-blocking yapıda çalışır .Yani asenkron olarak çalışır.
//Buda bir işlemin zaman alması diğer işlemleri etkilemez.demektir.

/**
 * setTimeOut ile 3 sn bekletiyoruz.
 */
// setTimeout(() => {
//     console.log('timeout')
// },3000);

// /**
//  * setInterval ile ise her 1 sn ye bir kendini yenilemesini söylüyoruz.
//  * Bu şekilde uygulamamızı çalıştırdığımız zaman ilk 2 saniyede interval 2 kez çalışır 3.saniyede timeout çalışır.
//  * Asenkron yapı.
//  */
// setInterval(()=>{
//     console.log('interval');

// },1000)

/**
 * setInterval ile zaman döngüsü içerisinde kod bloğu çalıştırabiliriz.
 * Bunu sıfırlayadabiliriz.
 * clearIntervaL() İLE ÇALIŞMAYI DURDURURUZ.
 */

// setTimeout(() => {
//     console.log('timeout');
//     clearInterval(sayi)
// },3000);

// let sayi=setInterval(()=>{
//     console.log('interval')
// },1000);


/**
 * Nodejs ile klasör yolu ve dosya yoluna erişebiliriz.
 */
console.log(__dirname);//klasör yolu
console.log(__filename);//dosya yolu
/**
 * front end de sayfamız içerisindeki etiketleri bir nesneymişcesine yönlendiriyorduk.Buna dom diyorduk.
 * Nodejs ile sunucu tarafında yönlendiremiyoruz.
 */

//console.log(document.querySelector)//yoktur.