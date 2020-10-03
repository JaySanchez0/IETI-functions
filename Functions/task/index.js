
var tasks = [{
    "id":0,
    "description": "Crear el front end",
    "responsible": {
        "name": "Santiago Carrillo",
        "email": "sancarbar@gmail.com"
    },
    "status": "ready",
    "dueDate": new Date(1995,11,17).toString()
},{
    "id":1,
    "description": "Crear Back end",
    "responsible": {
        "name": "Santiago Carrillo",
        "email": "sancarbar@gmail.com"
    },
    "status": "ready",
    "dueDate": new Date(1995,11,17).toString()
},{
    "id":2,
    "description": "Corregir Fallos",
    "responsible": {
        "name": "Santiago Carrillo",
        "email": "sancarbar@gmail.com"
    },
    "status": "ready",
    "dueDate": new Date(1995,11,17).toString()
    }];

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