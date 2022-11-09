//Loading modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var b = require('bonescript');

const logger = require('./logger');
const { error } = require('console');


// Initialize the server on port 8888
var server = http.createServer(function (req, res) {
    // requesting files
    var file = '.'+((req.url=='/')?'/index.html':req.url);
    var fileExtension = path.extname(file);
    var contentType = 'text/html';
    // Uncoment if you want to add css to your web page
    /*
    if(fileExtension == '.css'){
        contentType = 'text/css';
    }*/
    fs.exists(file, function(exists){
        if(exists){
            fs.readFile(file, function(error, content){
                if(!error){
                    // Page found, write content
                    res.writeHead(200,{'content-type':contentType});
                    res.end(content);
                }
            });
        }
        else {
            // Page not found
            logger.error(error)
            res.writeHead(404);
            res.end('Page not found');
        }
    });
}).listen(8888);

// Loading socket io module
var io = require('socket.io')(server);

// Displaying a console message for user feedback
// server.listen(console.log("Server Running ..."));
// console.log("Server Running ...");
logger.info('Server Running ...')