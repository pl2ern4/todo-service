const DB = require('./db');
const {Schema, model} = require("mongoose");

const todoListSchema =  new Schema({
    title: String,
    description: String
})

class TodoList extends DB {
    Model;
    constructor(){
        super();
        this.Model = model('ToDoList', todoListSchema,'todo_list');
    }
    async getList(id){
        let data = await this.Model.find()
        return data;
    }
    async createItem({title, description}){
        let obj = new this.Model({
            title,
            description
        }) 
        let res = await obj.save();
        return res;
    }
    async deleteTodo({item}){
        const deletedRes = await this.Model.findByIdAndDelete(item);
        if(deletedRes?._id){
            return true;
        }
        throw new Error(deletedRes || "item not found")
    }
}

module.exports = TodoList;