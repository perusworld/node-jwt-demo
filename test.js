var jwt = require('jsonwebtoken');
var fs = require('fs');

var priv = fs.readFileSync('secret/priv-key.pem');
var pub = fs.readFileSync('secret/pub-key.pem');

jwt.sign({ foo: 'bar' }, priv, { algorithm: 'RS256', expiresIn: 30 }, function (err, token) {
    console.log(token);
/*
    jwt.verify(token, pub, function (err, decoded) {
        console.dir(decoded)
    });
*/

});