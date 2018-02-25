module.exports = function solveEquation(equation) {
  // your implementation
    equation=equation.replace(/ /g,'');
    let tempStr=equation.slice(equation.indexOf('*')+4,equation.length);
    let a=Number.parseInt(equation.slice(0,equation.indexOf('*')));
    let b=Number.parseInt(tempStr);
    let c=Number.parseInt(tempStr.slice(tempStr.indexOf('x')+1,tempStr.length));
    let discr = (b * b) - 4 * (a * c);
    let sqrDiscr = Math.sqrt(discr);
    console.log(Math.round((- b + sqrDiscr) / (2 * a)),Math.round((- b - sqrDiscr) / (2 * a)));
    return Array.from([Math.round((- b + sqrDiscr) / (2 * a)),Math.round((- b - sqrDiscr) / (2 * a))]).sort((num1,num2)=>{return num1-num2;});

    console.log(Number.parseInt(equation.slice(0,equation.indexOf('*'))));
    console.log(Number.parseInt(tempStr));
    console.log(tempStr.slice(tempStr.indexOf('x'),tempStr.length));
    console.log(Number.parseInt(tempStr.slice(tempStr.indexOf('x')+1,tempStr.length)));
    console.log(a,b,c);
}
