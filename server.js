const express = require('express');
let app = express();
let port = 8000;
let path = require('path');



app.get('/',(req,res)=>{
	res.send(path.join(__dirname + '/home.html'));
})

app.get('/recipients',(req,res)=> {
	res.send(path.join(__dirname + '/reciepients.html'));
})
app.get('/users',(req,res)=>{
	res.send(path.join(__dirname + '/users.html'));
})

app.listen(port,() => console.log('todo list RESTful API server started on: ' + port));
