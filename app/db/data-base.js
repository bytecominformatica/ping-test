var pathUtil = require('../util/path-util');
var Sequelize = require('sequelize');
var sequelize = require('./connection')();
const modelsDir = __dirname + "/../model/"

module.exports = function() {
    pathUtil.walk(modelsDir, function(err, models) {
      if (err) throw err;

      models.forEach(function(model){
          sequelize.import(model);
          console.log("[SEQUELIZE] IF NOT EXIST CREATE ENTITY " + model);
      });

      sequelize.sync({/*force: true, */logging: null});

    });
}

module.exports.import = function(model) {
    return sequelize.import(modelsDir + model);
}
