const Sequelize = require('sequelize')
const sequelize = new Sequelize("nodeMysql_db","root","",{
     host :"localhost",
     dialect : "mysql"
});



const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require('./models/user-model.js')(sequelize,Sequelize)


sequelize.authenticate()
.then(()=>{
    console.log("Connected!");
})
.catch(err=>{
    console.log("err",err)
})


module.exports = db