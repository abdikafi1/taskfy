const http = require('http');
const { hostname } = require('os');
const taskRoutes = require('./routes/taskRoutes');

const port =3000;

const HOSTNAME ='localhost';

const  server = http.createServer((req,res)=>{
    if(req.url.startsWith('/task')){
        
        taskRoutes(req,res);


    }

    else{

        res.writeHead(404,'Not Found',{'content type' : 'application/json'})

        res.end(JSON.stringify('Page not found'))
        
    }
});


server.listen(port,hostname,()=>{})