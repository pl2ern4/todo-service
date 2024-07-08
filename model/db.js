const {connect, disconnect} = require("mongoose");

class DB {
    connection;
    constructor(){
        if(!this.connection){
            this.connection = this.createConnection();
        }
    }
    async closeConnection() {
        disconnect();
    }
    async createConnection() {
        try{
            const connection = await connect(process.env.MONGODB_URI||'',{
                dbName: 'todo_list',
                minPoolSize: 1
            });
            return connection;
        }
        catch(e){
            throw new Error(e);
        }
        
    }
}

module.exports = DB;