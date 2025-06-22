// creating a module, really just focused on modularity

// module for login messages


// remote login services for logging our messages

const EventEmitter = require('events')

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{

    log(message){ // we don't need 'function' here because its now a method a part of the Logger class
    // send an http request
    console.log(message)

    this.emit('messageLogged', {id: 1, url: 'http://'})
    }

}



// to access htis function in app.js we need to make the log method public
// remember when we console logged module, one of its properties was exports, we can use this

//module.exports.log = log;
// here we are exporting a object

// now we will just export the function

module.exports = Logger // we export the class instad of the function now

// doing this lets just call the function in our app js instead of also using the object