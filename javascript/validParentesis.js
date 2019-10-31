const validParentheses = parens => {
    while (parens != '' && parens.charAt(0) != ')' && parens.charAt(parens.length - 1) != '(') parens = parens.replace('()', '');
    return !parens.length;
}

console.log(validParentheses("()"));
console.log(validParentheses("())"));
console.log(validParentheses("()))"));