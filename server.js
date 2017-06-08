const http = require("http");
const url = require("url");

const port = 8412;

function start(route, handle){    
    function onRequest(request, response){
        const pathName = url.parse(request.url).pathname;
        const query = url.parse(request.url).query;
        console.log(`Request received : ${request.url}`);
        console.log(`Path name : ${pathName}`);
        console.log(`Query : ${query}`);

        route(handle, pathName, response);

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write("Hello World");
        // response.end();
    }
    http.createServer(onRequest).listen(port);    
    console.log("Server hats started.");
}

exports.start = start;

