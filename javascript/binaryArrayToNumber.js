//junto el arreglo y lo trata como entero

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));