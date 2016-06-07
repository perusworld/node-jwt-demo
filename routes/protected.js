var express = require('express');
var jwt = require('express-jwt');
var fs = require('fs');
var router = express.Router();

var jwtCheck = jwt({
    secret: fs.readFileSync('secret/pub-key.pem')
});

router.use('/protected', jwtCheck);

router.post('/protected/one', function (req, res, next) {
    console.dir(req);
    res.status(200).send({ success: 'true', body: req.body, auth: req.user });
});

module.exports = router;
