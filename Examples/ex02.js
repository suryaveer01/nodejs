var fact = require('./lib/mathutils.js').factorial;
var isPrime = require('./lib/mathutils.js').isPrime;
console.log(fact);
var n=5;
 var f = fact(n);

 console.log('fact output is : ', f );

 console.log('prime 1 to 100 ');

 for (var i=1; i<=50; i++){
     if(isPrime(i)){
         console.log(i);
     }
 }