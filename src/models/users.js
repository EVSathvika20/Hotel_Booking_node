    const { DataTypes } = require('sequelize');

    module.exports = (sequelize) => {
        const users = sequelize.define('users', {
            user_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            first_name: {
                allowNull: true,
                type: DataTypes.STRING(50)
            },
            last_name: {
                allowNull: true,
                type: DataTypes.STRING(50)
            },
            email: {
                allowNull: true,
                type: DataTypes.STRING(100)
            },
            password: {
                allowNull: true,
                type: DataTypes.TEXT
            },
            mobile_number: {
                allowNull: true,
                type: DataTypes.STRING(100)
            },
            status: {
                allowNull: true,
                type: DataTypes.STRING(100)
            },
        }, {
            tableName: 'users',
            timestamps: false
        });
        return users;

    };