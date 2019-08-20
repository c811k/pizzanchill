module.exports = (sequelize, DataTypes) => {
    var Pizza = sequelize.define("Pizza" , {
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        crust: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        sauce: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }

    });

    Pizza.associate = (models) => {
        Pizza.hasMany(models.Topping);
    };

    Pizza.associate = (models) => {
        Pizza.belongsTo(models.Custmoer, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    };

    return Pizza;
}