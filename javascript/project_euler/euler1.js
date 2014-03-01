// Solution to Project Euler: Problem 1
// Project URL: http://projecteuler.net/problem=1
// Problem: Find the sum of all multiples of 3 and 5 below 1000.


var sum = 0;
for(var i = 0; i<1000; i++) {
    if(i % 3 === 0 || i % 5 ===0) {
         sum += i;
    }
    console.log(sum);
}
