// function divisors(number) {
//     if (number % 2) {
//         var retorno = [];
//         for (i = 1; i <= (number / 2); i++) {
//             if (!(number % i) && i > 1) retorno.push(i);
//         }
//         return retorno.length > 0 ? retorno : number + ' is prime';
//     } else {
//         var retorno = [];
//         for (i = 2; i <= (number / 2); i++) {
//             if (!(number % i)) retorno.push(i);
//         }
//         return retorno;
//     }
// }


function divisors(number) {
    var retorno = [];
    for (i = 1; i <= (number / 2); i++)
        if (!(number % i) && i > 1) retorno.push(i);
    return retorno.length > 0 ? retorno : number + ' is prime';;
}


console.log(divisors(24));
console.log(divisors(9));
console.log(divisors(25));
console.log(divisors(13));