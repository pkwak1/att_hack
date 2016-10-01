//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

//Function handles requests and send response
function handleRequest(request, response){
    response.end('Hello World. Path Hit: ' + request.url);


}
//Get json file


//Create server
var server = http.createServer(handleRequest);

//Start server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening
    console.log("Server listening on: http://localhost:%s", PORT);
});

app.get('/home/*'), function(req,res,next){
  res.sendFile('/index.html',{root:_dirname});
}
