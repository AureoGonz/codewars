const findUniq = (arr) => {
    return arr[arr.map((value) => { return Array.from(new Set(value.toLowerCase().split(''))).sort().join('').replace(' ', '') }).reduce((total, value, index, self) => { return total + (self.indexOf(value) == self.lastIndexOf(value) ? index : 0) }, 0)]
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));
console.log(findUniq(['    ', 'a', ' ']));