const persistence = (per) => {
    return (per > 10) ? 1 + persistence(Array.from(String(per), Number).reduce((total, value) => { return total * value; })) : 0;
}

console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(39));
console.log(persistence(25));