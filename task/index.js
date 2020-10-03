
var tasks = [{id:1,name:"Add Task",description:"app"},{id:2,name:"Add Task",description:"app"},{id:3,name:"Add Task",description:"app"}];

function Get(context){
    context.res= {
        body:tasks,
        headers:{"Content-Type":"application/json"}
    }
}

function Post(context,task){
    tasks.push(task);
    task.id = tasks.length;
    context.res = {
        
    }
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req);
    if(req.method=='GET') Get(context);
    else if(req.method=='POST') Post(context,req.body);
}