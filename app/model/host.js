module.exports = function(sequelize, DataTypes) {
    return sequelize.define('host', {
        name: {type: DataTypes.STRING},
        ip: {type: DataTypes.STRING}
    });
};
