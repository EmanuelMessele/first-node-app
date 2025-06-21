 // having two functions with the same name means one will be overwritten, this is why we need modules

 // module is not a global object

 // in node, every file is a module and every variable and function is scoped to that module


 // ------loading a moudle
 //const log  = require('./logger') // now logger is a module with everything from the logger file we choose to export
// better to store a result of a require in a const
// that way we can't change logger on accident


//log('message') 

// working with path module

const path = require('path') // we dont have to use ./ because it is a built in path, not a file in a directory we onw

var pathObj = path.parse(__filename)

console.log(pathObj) // telss us info about our path


// os module
const os = require('os')
var totalMemory = os.totalmem();
var freeMemory = os.freemem(); 

// template string
// es6 / es2015 : ecma script 6 // using backtick element ` and ${variable}
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)


// file system module ----------------------> revisit it
const file = require('fs')
// const files = file.readdirSync('./')  // avoid using sync methods because they are blocking, you want to use non-blocking methods/ async methods to serve many clients
// console.log(files)

fstat.readdir('$',function(err, files){
    if(err){
        console.log('Error', error) // not how we handle errors normally
    } else {
        console.log('Result', files)
    }
})



// events module
const events = require('events')