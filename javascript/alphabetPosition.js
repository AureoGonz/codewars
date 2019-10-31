const alphabetPosition = sentence => {
    var alf = 'abcdefghijklmnopqrstuvwxyz';
    return sentence.replace(/[^a-zA-Z]/g, '').split('').map(value => {
        return alf.indexOf(value.toLowerCase()) + 1;
    }).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));