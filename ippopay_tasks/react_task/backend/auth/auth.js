const basicAuth = require('basic-auth');

const authCheck = async function (req, res, next) {
    if (req.headers.hasOwnProperty('authorization')) {

        var user = basicAuth(req);
        if (user == undefined || user == null) {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.sendStatus(401);
            return;
        }
        else if ((!user.hasOwnProperty('name')) || (!user.hasOwnProperty('pass'))) {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.sendStatus(401);
            return;
        }
        else if ((user.name == process.env.AUTH_NAME) && (user.pass == process.env.AUTH_KEY)) {   //admin authentication validation.
            console.log("Basic Auth:", user)
            next();
        }
        else {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.sendStatus(401);
            return;
        }
    }
    else {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.sendStatus(401);
        return;
    }
}
module.exports = authCheck;