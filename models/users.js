module.exports = function(sequelize, DataTypes) {

  //THIS IS A CLASS (template)
  var User = sequelize.define("Users", {
    username: DataTypes.STRING
    //makes an object with a username property
    //auto generates id, created_at, updated_at as well
  }, {
    //options object
    //an additional methods you want on User class
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Tasks);
      }
    }
  });

  return User;
};