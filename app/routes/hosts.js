var httpUtil = require('../util/http-util');
var hostDao = require('../dao/hostDao');

module.exports = function(app) {
	app.get('/hosts', findAll);
	app.get('/hosts/:id', findById);
	app.post('/hosts', save)
}

function save(req, res){
    hostDao.save(req.body, function(err, data) {
        if (err) httpUtil.error(res, err);

		httpUtil.sucess(res, data);
    });
}

function findById(req, res) {
    hostDao.findById(req.params.id, function(err, data){
        if(err) httpUtil.error(res, err);

        httpUtil.sucess(res, data);
    });
}

function findAll(req, res) {
    hostDao.findAll(function(err, data){
        if (err) httpUtil.error(res, err);

        httpUtil.sucess(res, data);
    });
}