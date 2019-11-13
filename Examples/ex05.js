const fs = require('fs');
const path = require('path');

const filename  = path.join(__dirname,'lib','my-functions','index.js');
console.log(filename);

const filebyets = fs.readFile(filename,'utf-8',(err,filebyets) =>{
    console.log('error:  /..',err);
    console.log('file read successfully..',filebyets);
});

console.log('Moving forward')