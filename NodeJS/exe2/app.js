const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
        response.write("Hello World");
        response.end();
    } else if (request.url === "/user" && request.method === "GET") {
        fs.readFile("file/user.json", (err, data) => {
            response.write(data);
            response.end();
        });
    } else {
        response.write("Bad Request");
        response.end();
    }
}).listen(8080);