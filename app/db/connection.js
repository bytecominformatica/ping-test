var Sequelize = require('sequelize');

module.exports = getConnection

function getConnection() {
    return _con
}

var _con = new Sequelize('pingtest', 'pingtest', 'pingtest', {
    host: 'localhost',
    dialect: 'mysql'
});