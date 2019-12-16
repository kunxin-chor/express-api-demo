const db = require('../db.js');
const UserModel = {
    getUsers:function(callback) {
           let sql = `SELECT * from User`;
    
            db.query(sql, (err,results)=>{
                callback(results);
            });
    }
}