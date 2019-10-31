const findOdd = a => {
    return a.sort().filter((v, i, s) => {
        return !((s.lastIndexOf(v) - s.indexOf(v)) % 2);
    })[0];
    // const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));