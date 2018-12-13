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
        var sql="insert into friends(name,id,location ) values?"

        var records=[
            ['aman',4,'kolkata'],
            ['amar',5,'banagalore'],
            ['uma',6,'chennai'],
        ]
        connection.query(sql,[records],function(err,suc){
            if(err){
                throw err
            }else{
                console.log(" 3 rows inserted")
            }
        })
    }
})
