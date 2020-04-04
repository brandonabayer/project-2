module.exports = function(sequelize, DataTypes){
    var Person = sequelize.define("Person", {
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
    })
    return Person;
};

