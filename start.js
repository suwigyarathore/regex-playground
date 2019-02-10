const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

const str = `12/1/16
12-16-13
11/12/16
12-12-2016`;

const regexlit = /^12.+16$/gm;

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
