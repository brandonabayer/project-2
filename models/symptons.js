module.exports = function(sequelize,DataTypes){
    var Sympton = sequelize.define("Sympton",{
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        description: DataTypes.STRING,
        dateFirstAppeared: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    })
    return Sympton
}