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

file.readdir('./', function(err, files){
    if(err){
        console.log("Error", error)
    } else {
        console.log("Rsult", files)
    }
});


// events module

// Event Emitter is one of the core building blocks of node
const EventEmitter = require('events')  // EventEmitter is a class you can tell by the casing

const Logger = require('./logger')
const log = new Logger(); 

// register a listener
log.on('messageLogged', (arg) => { //instead of function(arg), you can (arg) => // can be called anything, e , event arg
    console.log("listner called", arg)
});

//signalling an event has happened
log.log('message')

// order matters
// we have to register listeners before emitting because callig the emit method makes the emitter iterate over all the registered listeners and calls them synchronously 




// http module
const http = require('http');

const server = http.createServer((req, res) => { // this gets more dirty over time, which is where express comes in
    if (req.url == '/'){
        res.write("hello world")
        res.end()
    }

    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }


}); // with this we can create a web server, this server is an EventEmitter, so it has all its capabilities

server.listen(3000); // 3000 is a port

console.log('Listening on port 3000...')