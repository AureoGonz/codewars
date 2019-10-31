const digPow = (digits, pot) => {
    var t = Array.from(String(digits), Number).reduce((total, value, index) => {
        console.log(pot + index);
        return total + Math.pow(value, pot + index);
    }, 0);
    return t; //!(t % digits) ? t / digits : -1;
};

console.log(digPow(89, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));