const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

const str = `foo
foobar
foobaz
fooboo`;

const regexlit = /foo(?=bar|boo)/g;

output(str, regexlit, document.querySelector("pre"));

console.log(str.replace(regexlit, "area code: $1"));

// const regexlit = /is/gi;

// console.log(regex.test(str));
// console.log(regex.exec(str));

// //console.log(regexlit.test(str));
// console.log(regexlit.exec(str));
// console.log(regexlit.exec(str));
// console.log(regexlit.exec(str));

// console.log(str.match(regexlit));
// console.log(str.replace(regexlit, str => "XX"));

// console.log(str.search(regexlit));
