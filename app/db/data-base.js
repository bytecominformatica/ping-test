var pathUtil = require('../util/path-util');
var Sequelize = require('sequelize');
var sequelize = require('./connection')();
const modelsDir = __dirname + "/../model/"

module.exports.sync = sync
module.exports.import = importModel

function sync() {
    pathUtil.walk(modelsDir, function(err, models) {
      if (err) throw err;

      models.forEach(function(model){
          sequelize.import(model);
          console.log("[SEQUELIZE] IF NOT EXIST CREATE ENTITY " + model);
      });

      sequelize.sync({/*force: true, */logging: null});

    });
}

function importModel(model) {
    return sequelize.import(modelsDir + model);
}
