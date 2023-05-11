
let n = 7;
let a = 0;
let b = 1;
let c = 0;
let fibonacci = [];
fibonacci.push(a);
fibonacci.push(b);
for (let i = 0; i < n-2; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacci.push(c);
}
console.log(fibonacci);

