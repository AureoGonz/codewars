const findUniq = (arr) => {
    return arr.filter((value) => { return arr.indexOf(value) == arr.lastIndexOf(value) })[0];
    // return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));