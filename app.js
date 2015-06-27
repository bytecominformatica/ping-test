var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var DB = require('./app/db/data-base');

DB();

//var Host = require('./app/model/host')(sequelize, Sequelize);

//Host.sync({force: true}).then(function() {
//    return Host.create({name: 'bytecom-patricia-gomes-rep1', ip: '10.77.100.101'});
//});

app.use(bodyParser.json());
app.use(express.static('public'));

require('./app/routes/routes')(app);

app.listen(3000);
console.log('server running 3000');



