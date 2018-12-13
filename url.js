var httpVariable = require('http')
var url =require ('url')
var server= httpVariable.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Iam working with URL parameters now!!!!!")
    res.write("<br></br>")

    var myQuery=url.parse(req.url,true).query
    console.log(myQuery)

    var q1text=myQuery.first
    var q2text=myQuery.last

    res.write("first:" +q1text)
    res.write("<br></br>")
    res.write("last:" +q2text)
    res.write("<br></br>")

    res.write(req.url)
    res.end()
})
server.listen(8888)