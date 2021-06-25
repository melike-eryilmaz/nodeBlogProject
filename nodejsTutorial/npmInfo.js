/**
 * Node package manager/npm
 * nodejs tarafında kod geliştirme kısmı paketler üzerinden ilerliyor.
 * Paketlere ekstra özellikler katan third party paketleri npm ile yönetiyoruz.
 * npm --version
 * npm install npm@latest -g
 * npm.js sitesinde paketlere erişebiliriz.
 * Global paket yükleme
 * nodeman dosyalar üzerinde yaptıgımız değişikleri algılar ve sürekli günceller.
 * npm install nodeman -g
 * Proje bazlı paket yükleme /local
 * lodash paketi
 * javascript fonksiyonu kayıtlı
 * npm install lodash --save
 * 
 * NPM KOMUTLARI
 * npm uninstall lodash ------ ile yüklü olan paketi sileriz.
 * projemizin npm projesi oldugunu ve npm paketleri kullanacağını belirtme:
 * npm init   ve sorular sorar. package.json altında tutar.
 * package.json ve package-lock.json dosyaları oluştu.
 * Package.json altında bilgiler listelendi.npm paketleri yüklenen bilgileride burada tutuluyor.
 * dependencies altında paketler gerekli olan eklenir.
 * npm install ile dependencies altındaki tüm dosyalar eklenir.
 * 
 * Sadece develop esnasında eklenecek package ler için ise 
 * npm install --save-dev gulp şeklinde indirme yapılır.
 * package.json içerisinde devDependencies altına gulp eklenir.
 * gulp paketi silinip production alındığında sorun olmaz.
 * npm install --production ile sadece production için gerekli paketler yüklenir.
 * 
 * npm init ile hızlı package.json oluşturma
 * npm init --yes
 * or npm init -y
 * 
 * author verme
 * npm config set init-author-name "Melike Eryılmaz"
 * licence verme
 * npm set init-license "MIT"
 */

const _ = require('lodash');


let nums = [11,22,33,44]

//Array değerlerini ve indexlerini döner.
_.each(nums,(val,keys)=>{
    console.log(val);
    console.log(keys);
});

//0-20 arasında random sayı oluşturup döner.
let num = _.random(0,20);
console.log(num);

//Ne kadar çağırırsan çağır sadece 1 kez çalışır.
let greeting = _.once(()=>{
    console.log('merhabaaa');
})

greeting();
greeting();