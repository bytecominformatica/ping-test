const OK = 200;
const INTERNAL_SERVER_ERROR = 200;

module.exports = {
    sucess: sucess,
    error: error
}

function sucess(res, obj) {
	res.writeHead(OK, {"Content-Type": "application/json"});
	res.end(JSON.stringify(obj));
}

function error(res, error) {
	res.writeHead(INTERNAL_SERVER_ERROR, {"Content-Type": "application/json"});
	res.end(JSON.stringify(error));
	throw error;
}