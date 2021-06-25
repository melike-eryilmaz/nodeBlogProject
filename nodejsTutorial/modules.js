/**
 * modules
 * Farklı farklı dosyalar içerisinde kod bloklarımızı yazarız.
 * Sonrasında require ile bu dosyaları kullanırız.
 * farklı yerlerde kullanabilmek için export etmemiz gerekir.
 */

const { greeting } = require('./people');
let p = require('./people');

console.log(p)
// console.log(p.names)//direkt obje altındaki array e ulaşabiliriz.
// console.log(p.ages)
console.log(p.nameList)
console.log(p.ageList)
console.log(greeting('Melike'))