function taskRoutes(req,res){

// find all routes

//route for 
if(req.method === 'GET'){
  getTasks(req,res);
}

else if(req.method === 'POST'){
    createTask(req,res);
}


else if(req.method === 'PATCH'){
    updateTasks(req,res);
}


else if(req.method === 'DELETE'){
    deleteTasks(req,res);
}

else{
        res.writeHead(404,'Not Found',{'content type' : 'application/json'})

        res.end(JSON.stringify('Page not found'))
    }
}


module.exports = taskRoutes;