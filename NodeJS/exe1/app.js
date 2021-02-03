const http = require("http");

http.createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
        response.write("Hello World");
        response.end();
    } else {
        response.write("Bad Request");
        response.end();
    }
}).listen(8080);

console.log("Server started.");