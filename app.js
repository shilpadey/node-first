const http = require('http');

const server = http.createServer((req,res) => {
    req = " Shilpa Dey ";
    console.log(req);
    process.exit();
});

server.listen(4000);