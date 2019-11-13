const fs = require('fs');
const sleep = (duration) =>{
    const startTime = Date.now();
        while((Date.now() -startTime) < duration);
}

module.exports.execAfterDelay = (callback, duration = 1000) => {

    if(typeof callback !== 'function'){
        throw new Error('callback must be a funcation!')
    }

    if(typeof duration !== 'number'){
        throw 'duration must be number!';
        }

        sleep(duration);
        callback();
}


module.exports.subtotal = (filename,callback) => {
    if(typeof callback !== 'function'){
        throw new Error('callback must be a funcation!')
    }
    //makign async funtion with settimeout

    setTimeout(() => {
        if(typeof filename !=='string'){
            callback('filename must be string',null);
            return;
        }
        fs.readFile(filename,'utf-8', (err,content) =>{
            if(err){
                callback(err,null);
            }
            //process content
            let lines = content.split('\n');
            let count = 0,sum = 0;
            lines.forEach((line) => {
                if(!isNaN(line)){
                sum +=parseFloat(line);
                count++;
                }
            });
            var retval = {};
            retval.count =count;
            retval.sum = sum;
            retval.average = sum/count;
            callback(null,retval);
        });
    },0);
}