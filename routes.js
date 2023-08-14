const fs = require('fs');
const path = require('path');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    const body = [];
  if (url === '/') {
    const filepath = path.join(__dirname, 'message.txt');
    fs.readFile(filepath, {encoding: 'utf-8'}, (err,data) => {
      if(err){
        console.log(err);
      };
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write(`<body>${data}</body>`)
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      res.end();
    });
    
  }else if (url === '/message' && method === 'POST') {
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> my first web page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>')
    res.end();
  };
  
}

//module.exports = requestHandler;

/*module.exports = {
    handler: requestHandler,
    someText: 'This is hardcoded text'
};*/

//module.exports.handler = requestHandler;
//module.exports.someText = 'this is hardcoded text';

exports.handler = requestHandler;
exports.someText = 'this is hardcoded text';