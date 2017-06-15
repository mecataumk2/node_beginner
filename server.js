const http = require("http");
const url = require("url");

const hostname = "192.168.0.190";
const port = 8412;

function start(route, handle){    
    function onRequest(request, response){        
        // const query = url.parse(request.url).query;
        // let postData = "";
        const pathname = url.parse(request.url).pathname;
        // console.log(`Request received : ${request.url}`);
        // console.log(`Path name : ${pathname}`);
        // console.log(`Query : ${query}`);
        console.log(`Request for ${pathname} received.`);
        route(handle, pathname, response, request);

        // request.setEncoding("utf8");

        // request.addListener("data", (postDataChunk) => {
        //     postData += postDataChunk;
        //     console.log(`Recieved POST data chunk '${postDataChunk}'.`);
        // });

        // request.addListener("end", () => {
        //     route(handle, pathname, response, postData);    
        // });

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write("Hello World");
        // response.end();
    }
    http.createServer(onRequest).listen(port, hostname);    
    console.log("Server hats started.");
}

exports.start = start;

