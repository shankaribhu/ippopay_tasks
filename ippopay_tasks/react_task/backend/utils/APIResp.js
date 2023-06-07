module.exports = {

	getUniquenessError: function (result, res) {
		res.status(500).send({ "status": false, message: result });
	},
	getCreatedResult: function (msg, resp, res) {
		res.status(201).send({ "status": true, responsecode: 201, message: msg, data: resp });
	},
	getErrorResult: function (errResp, res) {
		res.status(400).send({ "status": false, responsecode: 400, message: errResp });
	},
	getINTERNALSERVERError: function (result, res) {
		res.status(500).send({ "status": false, responsecode: 500, message: result });
	},
}