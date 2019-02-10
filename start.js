const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

const str = `Aeiou $100 55.5%`;
const regexlit = /[\S]/g;

output(str, regexlit, document.querySelector("pre"));

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
