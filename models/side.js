module.exports = (sequelize, DataTypes) => {
    var Side = sequelize.define("Side", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150] 
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });

    Side.associate = (models) => {
        Side.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    };

    return Side;
}
