var mysqldb= require('mysql')
var connection=mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbfromnode1234'
    
}) 
connection.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("connected to mysql server !!!")
        var sql="create table friends(name varchar(32),id int(8),location varchar(32))"
        connection.query(sql,function(err,suc){
            if(err){
                throw err
            }else{
                console.log("table created")
            }
        })
    }
})
