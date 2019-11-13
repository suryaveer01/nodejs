//this is used to export in js
//export function factorial(num){
function factorial(num){
console.log('print factorial of ..',num);
var f=1;

for(var i=1; i<=num; i++){
    f*=i;
}
return f;
}


function isPrime(num){
    var limit = num/2;

    for(i=2; i<=limit ; i++){
        if(num % i ==0 ) return false;

    }
    return true;

}

//exporting in plain node js

module.exports = factorial;

module.exports.factorial = factorial;
module.exports.isPrime = isPrime;