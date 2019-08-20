module.exports = (sequelize, DataTypes) => {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adddress: {
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

    Customer.associate = (models) => {
        Customer.hasMany(models.Pizza);
        Customer.hasMany(models.Side);
    }

    return Customer;
}