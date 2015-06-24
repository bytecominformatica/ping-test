var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var ping = require ("net-ping");
var session = ping.createSession();

app.use(bodyParser.json());
app.use(express.static('public'));

require('./app/routes/routes')(app);

app.listen(3000);
console.log('server running 3000');



