// Makes it so you can read a text file somehow
const fs = require('fs')
let data = fs.readFileSync('file.txt').toString()

let arr = data.split("\r\n\r\n").map((e) => e.split("\r\n").map((p) => parseInt(p)))
// .reduce((p, c) => p + c, 0))
console.log(arr);