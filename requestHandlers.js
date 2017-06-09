const exec = require("child_process").exec;
const querystring = require("querystring");
const fs = require("fs");

function start(response){
    console.log("Request handler 'start' was called.");
    // exec("find /",
    // { timeout: 10000, maxBuffer: 20000*1024 },
    // function (error, stdout, stderr) {
    //   response.writeHead(200, {"Content-Type": "text/plain"});
    //   response.write(stdout);
    //   response.end();
    // });

    // exec("ls -al", (error, stdout, stderr) => {
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });

    const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload File" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(`You've send the text : ${querystring.parse(postData).text}`);
    response.end();
}

function show(response){
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/test.png", "binary", (error, file) => {
        if (error){
            response.writeHead("500", {"Content-Type": "text/plain"});
            response.write(`${error} \n`);
            response.end();            
        } else { 
            response.writeHead("200", {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;