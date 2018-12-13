var httpVariable= require('http')
var file=require('fs')
var server= httpVariable.createServer(function(re,rs){
    rs.writeHead(200,{'Content-Type':'text/html'})
    rs.write("working with fs module")

    file.readFile('hello.txt',function(err,data){

        if(err){
            throw err
        }
        rs.write("<br></br>")
        rs.write(data)
        file.writeFile("hello1.txt",data,function(err){
            console.log(err);
        })
        rs.end()
    })
    
}).listen(8888)