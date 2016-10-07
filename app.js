//Problem: We need a simple way to look at a user's badge count and Javascript points from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

//1. Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  setInterval(() => {
      response.write(new Date())
  }, 1000);
  response.write("This is before the end");
  //response.end('Hello World\n');
  response.write("This is after the end/n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//2. Handle HTTP route GET / and POST / i.e. Home
homeRoute((request, response) => {
    //if url == "/" && GET
        //show search
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header");
        response.write("Search");
        response.end('Footer');
    //if url == "/" && POST
        //redirect to /:username
}


//3. Handle HTTP route GET /:username i.e. /chalkers
    //if url == "/...."
        //get json from Treehouse
            //on "end"
                //show profile
            //on "error"
                //show error

//4. Function that handles the reading of files and merge in value
    // read from file and get a string
        // merge values in to string