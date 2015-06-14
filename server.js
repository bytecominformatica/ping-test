var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/hosts', function(req, res) {
  var _hosts = [{
     "title": "bytecom-mk-patricia-gomes",
     "ip": "10.77.100.1",
     "nodes": [
            {
              "title": "bytecom-patricia-gomes-rep1",
              "ip": "10.77.100.101",
              "nodes": []
            }, {
              "title": "bytecom-patricia-gomes-rep2",
              "ip": "10.77.10100.102",
              "nodes": []
            }, {
              "title": "bytecom-patricia-gomes-rep3",
              "ip": "10.77.100.103",
              "nodes": []
            }, {
              "title": "bytecom-patricia-gomes-rep4",
              "ip": "10.77.100100.104",
              "nodes": []
            }, {
              "title": "bytecom-patricia-gomes-omni",
              "ip": "10.77.100.105",
              "nodes": []
            }]
     }];

     console.log('teste');
     var _json = JSON.stringify(_hosts);
     console.log(_json);

  res.end(_json);
});

app.listen(3000);
console.log('server running');
