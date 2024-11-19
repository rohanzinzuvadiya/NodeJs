const http = require("http");
const port = 8000;

const portHandle = (req , res) => {
    res.write("<h1>Welcome to Server</h1>");
    res.end();
}

const server = http.createServer(portHandle);

server.listen (port , (err)=>{
    err ? console.log(err) : console.log("server started on" + port);
});
