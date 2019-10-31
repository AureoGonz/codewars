const iqTest = (arr) => {
    return arr.split(' ').map((value) => {
        return value % 2;
    }).reduce((total, value, index, self) => {
        return total + (self.indexOf(value) == self.lastIndexOf(value) ? index : 0)
    }, 1)
}

console.log(iqTest("2 4 7 8 10"));