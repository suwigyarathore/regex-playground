const str = "Is this is me";
const regex = new RegExp("is");
const regexlit = /is/gi;

//console.log(regex.test(str));
//console.log(regex.exec(str));

//console.log(regexlit.test(str));
console.log(regexlit.exec(str));
console.log(regexlit.exec(str));
console.log(regexlit.exec(str));

console.log(str.match(regexlit));
console.log(str.replace(regexlit, str => "XX"));

console.log(str.search(regexlit));