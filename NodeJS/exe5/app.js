const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
        fs.readFile("file/index.html", "utf8", (err, indexHtml) => {
            if (err){ console.log(err.message); }
            else {
                response.write(indexHtml);
                response.end();
            }
        });
    } else {
        response.write("Not Found");
        response.end();
    }
}).listen(8080);