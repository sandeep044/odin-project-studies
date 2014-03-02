// Project Euler: Problem 2
// Project URL: http://projecteuler.net/problem=2
// Problem: Find the sum of even valued terms in a Fibonacci sequence whose values do not exceed four million.

//Calculate the Fib. sequence from 0 - 4,000,000
var a = 0;
var b = 1;
var c = 0;
var sum = 0;

while( a < 4000000) {
    
    if( a % 2 === 0){
        sum += a;
    }
    c = a + b;
    a = b;
    b = c;
}

console.log(sum);



