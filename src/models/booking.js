const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Booking = sequelize.define('booking', {
        booking_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        hotel_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        check_in_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        check_out_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        num_guests: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        status: {
            allowNull: true,
            type: DataTypes.STRING(100)
        },
    }, {
        tableName: 'bookings',
        timestamps: false
    });
    Booking.associate = function(models) {
        Booking.hasMany(models.hotels, {
            foreignKey: 'hotel_id',
            as: 'hotels'
        }); 
      };

    return Booking;
};
