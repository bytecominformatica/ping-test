var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var DB = require('./app/db/data-base');

DB.sync();

app.use(bodyParser.json());
app.use(express.static('public'));

require('./app/routes/routes')(app);

app.listen(3000);
console.log('server running 3000');



