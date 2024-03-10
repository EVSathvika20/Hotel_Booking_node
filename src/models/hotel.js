const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Hotel = sequelize.define('hotels', {
        hotel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        website: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            allowNull: true,
            type: DataTypes.STRING(100)
        },
    }, {
        tableName: 'hotels',
        timestamps: false
    });
    Hotel.associate = function(models) {
        Hotel.hasMany(models.booking, {
            foreignKey: 'hotel_id',
            as: 'Bookings'
        }); 
      };

    return Hotel;
};
