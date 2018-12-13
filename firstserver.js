var httpVariable =require('http')
 //const ngrok= require ('ngrok');

var myServer= httpVariable.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Hello from Node server!!!!Very Good")
    res.end()
}).listen(8888)

//myServer.listen(8888)

/*(async function(){
    const url=await ngrok.connect();
})();*/
