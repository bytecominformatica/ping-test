module.exports = getConnection

function getConnection() {
    return _con
}

var _con = new Sequelize('pingtest', 'pingteste', 'pingtest', {
    host: 'localhost',
    dialect: 'mysql'
});