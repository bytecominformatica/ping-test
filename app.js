var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var DB = require('./app/db/data-base');

DB.sync();

var Host = DB.import('host');

Host.create({name: 'bytecom-patricia-gomes-rep1', ip: '10.77.100.101'});

app.use(bodyParser.json());
app.use(express.static('public'));

require('./app/routes/routes')(app);

app.listen(3000);
console.log('server running 3000');



