const calc = require('./opr.js');
const fs = require('fs');

const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;


const inspection = new Promise(resolve=>
    fs.readFile('input.txt',(err,data)=>{
    if(err) { throw err;}
    
    resolve(data.toString());
    
    
}));


inspection.then(result=>
{
var calclist = result.split(',');
console.log(calclist)
if(calclist[1]==='+'){
    return add(calclist[0],calclist[2]);
}
else if(calclist[1]==='-'){
    return subtract(calclist[0],calclist[2]);
}
else if(calclist[1]==='*'){
    return multiply(calclist[0],calclist[2]);
}
else if(calclist[1]==="/"){
    return divide(calclist[0],calclist[2]);
}
else{
    console.log("error")
}
}
).then(result=>fs.writeFile('output.txt',result,err=>{if (err){throw err;} console.log("완료") }))



