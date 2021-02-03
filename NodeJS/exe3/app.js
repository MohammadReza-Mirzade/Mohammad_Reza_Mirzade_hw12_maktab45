const http = require("http");

http.createServer(function (request, response) {
    response.write(request.url);
    response.end();
}).listen(8080);

console.log("Server started.");