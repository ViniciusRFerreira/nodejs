const http = require("http");

const server = http.createServer((request, response) => {
    console.log(`Request Method: ${request.Method}| Endpoint: ${request.url}`);
    if (request.url === '/users' && request.method === 'GET'){
        response.writeHead(200, {'Content-Type': 'applicattion/json'});
        response.end(JSON.stringify(users));
    }
});

server.listen(3000, () => console.log("Server started at http://localhost:3000"));
