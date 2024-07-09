const express = require("express");
const bodyParser = require("body-parser");
const query = require('./queries/todolist')
const app = express();

app.use(bodyParser.json())
app.use((_,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
app.get('/get-list/:id?',async (req,res)=>{
    const { id = null } = req.params;
    const result =await query.getDetails(id);
    res.json(result)
})
app.post('/insert-in-data',async (req,res)=>{
    const { title, description } = req.body;
    if(!title || ! description ){
        res
        .status(400)
        .send({"message":"invalid message"})
    }
    const result =await query.createTodo({ title, description  });
    res.json(result)
})

app.post("/delete-todo", async (req,res)=>{
    const { item } = req.body;
    
    try{
        if(!item){
            throw "id should not be empty"
        }
        const result = await query.deleteTodo({item});
        res.json({
            id:item
        })
    }catch(e){
        res.status(400).send({message:e||"data not found"})
    }
})

app.get('/*',(_,res)=>{
    res.send("hello world")
})

const server = app.listen(300,()=>{
    console.log("listening ", 300)
})
server.setTimeout(500000)