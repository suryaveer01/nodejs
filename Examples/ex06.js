const fs = require('fs');
const path = require('path');
const subtotal = require ('./lib/my-functions').subtotal;

const filename  = path.join(__dirname,'data1.txt');
console.log(filename);
subtotal(filename,(err,subtotal) => {
    if(err){
        throw err;
    }
    console.log(subtotal);
});
/*const filebyets = fs.readFile(filename,'utf-8',(err,filebyets) =>{
    console.log('error:  /..',err);
    console.log('file read successfully..',filebyets);
});*/

console.log('Moving forward')