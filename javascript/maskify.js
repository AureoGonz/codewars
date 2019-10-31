// crea un arraglo, valida que no sean los ultimos 4, los cambio, retorna

function maskify(toSecret) {
    return Array.from(toSecret).map((value, index) => { return index < toSecret.length - 4 ? '#' : value }).join('');
};

// better

// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
// }

console.log(maskify("Skippy"));