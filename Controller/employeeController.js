
const db = require('../Config.js')
const User = db.User;



//Insert 

const postEmployee =async (req, res) => {
   const records =  User.create({firstName :`${req.body.parse}`,lastName:`${req.body.parse}`}).then((result) => {
      res.send(result)
    }).catch((err) => {
      console.log(err)
    });
}
module.exports = {postEmployee}