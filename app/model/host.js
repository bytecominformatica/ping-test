module.exports = function(sequelize, DataTypes) {
    var Host = sequelize.define('host', {
        name: {type: DataTypes.STRING},
        ip: {type: DataTypes.STRING}
    });

    Host.hasMany(Host, {as: 'nodes'});

    return Host;
};
