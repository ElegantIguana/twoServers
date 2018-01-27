// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;
var PORT2 = 8000;

// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  //response.end("It Works!! Path Hit: " + request.url);
  response.end("--- You are a smart, capable developer --------\n");
}

function handleRequestTwo(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  //response.end("It Works!!!!!! Path Hit: " + request.url);
  response.end("--- Your code is bad and you should feel bad ---\n");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

  serverTwo.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});