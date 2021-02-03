const http = require("http");

http.createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
        response.write("Hello Web Application");
        response.end();
    } else if (request.url === "/about" && request.method === "GET") {
        response.write("About me");
        response.end();
    } else if (request.url === "/login" && request.method === "GET") {
        response.write("Login");
        response.end();
    } else if (request.url === "/contact" && request.method === "GET") {
        response.write("Contact me");
        response.end();
    } else if (request.url === "/home" && request.method === "GET") {
        response.write("Home Page");
        response.end();
    } else {
        response.write("Not Found");
        response.end();
    }
}).listen(8080);