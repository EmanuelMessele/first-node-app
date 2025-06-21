// creating a module, really just focused on modularity

// module for login messages


// remote login services for logging our messages

var url = 'http://mylogger.io/log';

function log(message){
    // send an http request
    console.log(message)
}

// to access htis function in app.js we need to make the log method public
// remember when we console logged module, one of its properties was exports, we can use this

//module.exports.log = log;
// here we are exporting a object

// now we will just export the function
module.exports = log
// doing this lets just call the function in our app js instead of also using the object