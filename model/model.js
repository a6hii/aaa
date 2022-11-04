const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('users', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    phone_number: {
        type: Sequelize.STRING,
        validate: { len: [10,15]  }
    },
    email: {
        type: Sequelize.STRING,
        validate: { isEmail: true },
    },
    gender: {
        type: Sequelize.STRING,
    },
    dob: {
        type: Sequelize.DATEONLY,
    },
    
});

const Applications = db.define('applications', {
    application_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    application_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

const Sessions = db.define('sessions', {
    device_id: {
        type: Sequelize.STRING,
        primaryKey:true
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: { len: [5,10],
            is: ["^[a-z0-9]+$",'i'],
         }
    },
    created_at: {
        type: Sequelize.DATE,
    },
    lastActive_at: {
        type: Sequelize.DATE,
    },
    
});

Sessions.belongsTo(Users, {
    foreignKey: "user_id",
    primaryKey:true,
    onDelete: "CASCADE"
});

Sessions.belongsTo(Applications, {
    foreignKey: "application_id",
    primaryKey: true, 
    onDelete: "SET NULL"
});

// Users.belongsToMany(Applications, { through: Sessions});
// Applications.belongsToMany(Users, { through: Sessions});

module.exports =  Sessions;
