const TodoList = require('../model/todoList');

const getDetails= async (id)=>{
    const todoList = new TodoList();
    const list = await todoList.getList(id);
    return list;
}

const createTodo= async ({title, description})=>{
    const todoList = new TodoList();
    const list = await todoList.createItem({title, description});
    return list;
}

const deleteTodo= async ({item})=>{
    const todoList = new TodoList();
    let list;
    list = await todoList.deleteTodo({item});
    return list;
    
}

module.exports = { getDetails, createTodo, deleteTodo }