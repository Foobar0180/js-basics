let a = 'red';
let b = 'blue';

let temp = b;

b = a;
a = temp;

console.log(a); // blue
console.log(b); // red