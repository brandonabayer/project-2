var Individual = function(sequelize,DataTypes){
    var Individual = sequelize.define("Individual",{
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        familyID: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        riskFactor: DataTypes.STRING
    })
  return Individual      
} 

module.exports = Individual