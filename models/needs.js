module.exports = function(sequelize,DataTypes){
    var Need = sequelize.define("Need",{
        description: DataTypes.STRING,
        datePosted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    })
    return Need
}
