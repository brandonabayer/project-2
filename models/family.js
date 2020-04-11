module.exports =function(sequelize,DataTypes){
    var Family = sequelize.define("Family",{
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        city: DataTypes.STRING,
        riskFactor: DataTypes.INTEGER,
        dateCreated: {
           type: DataTypes.DATE,
           allowNull: false,
           defaultValue: DataTypes.NOW
        }
    })
    return Family
}