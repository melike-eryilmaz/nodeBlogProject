let names = ['Melike','Zafer','Duygu'];
let ages = [12,21,18]
let greeting = (name)=>{
    return `Merhaba,${name}` 
}

//console.log(names)

// exports.names = names//names objesi altında names arrayi döner.
// exports.ages = ages//Birden fazla array de dönebiliriz.Bu durumda obje altında names ve ages olarak 2 array dönecektir.

//Birden fazla array exportlarda aşağıdaki gibide yapılabilir.

// module.exports = {
//     names,
//     ages
// }

//Dönecek arraylere burada farklı isim atanabilir.
module.exports = {
    nameList:names,
    ageList:ages,
    greeting
}