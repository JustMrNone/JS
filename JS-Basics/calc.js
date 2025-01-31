let cal = (a, b, c) => eval(`${a} ${c} ${b}`);
let first = prompt("first: "), operator = prompt("Operator: "), second = prompt("second: ");
console.log(cal(first, second, operator));