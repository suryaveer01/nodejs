const execAfterDelay = require ('./lib/my-functions').execAfterDelay;

console.log('start');
//execAfterDelay( () =>{
//    console.log('callback executing..');
//},4000);
setTimeout( () =>{
    console.log('callback executing..');
},4000);
console.log('returned from exec');
console.log('end');