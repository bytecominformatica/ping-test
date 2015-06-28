var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var DB = require('./app/db/data-base');

DB.sync();

var Host = DB.import('host');

var h1 = {
        name: "bytecom-mk-patricia-gomes",
        ip: "10.77.100.1"
    }
var h2 = {
        name: "bytecom-patricia-gomes-rep1",
        ip: "10.77.100.101"
    }


Host.create(h1).then(function(host){
    Host.create(h2).then(function(host2){
        host.setNodes([host2]).then(function() {
            console.log('sucess');
        });
    });
});
//var host2 = ;
//host.setNodes([host2]);




app.use(bodyParser.json());
app.use(express.static('public'));

require('./app/routes/routes')(app);

app.listen(3000);
console.log('server running 3000');



