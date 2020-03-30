module.exports =function(sequelize,DataTypes){
    var Family = sequelize.define("Family",{
        userCreated: DataTypes.STRING,
        dateCreated: {
           type: DataTypes.DATE,
           allowNull: false,
           defaultValue: DataTypes.NOW
        }
    })
    return Family
}