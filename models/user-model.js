// 1.Calling sequelize.define(modelName, attributes, options)

// const User = sequelize.define("User",{
// firstName :{
//     type : DataTypes.STRING
// },
// lastName :{
//     type : DataTypes.STRING
// }},{
//    sequelize,
//   timestamps : false
// }
// );
// console.log(User === sequelize.models.User);

//2.Extending Model and calling init(attributes, options)

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
    }
  );
  return User;
};

