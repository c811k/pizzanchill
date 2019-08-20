module.exports = (sequelize, DataTypes) => {
    var Topping = sequelize.define("Topping", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        }
    });

    Topping.associate = (models) => {
        Topping.belongsTo(models.Pizza, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    };

    return Topping;
}