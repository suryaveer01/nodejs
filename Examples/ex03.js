console.log('Getting core modules');

var os  =  require('os');

console.log('Type of os is : ' ,typeof os);

console.log('numebr of cpus : ' , os.cpus()[0]);
