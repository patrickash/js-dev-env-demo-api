var express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmailx.com"},
    {"id": 2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@yahoox.com"},
    {"id": 3, "firstName":"Tina", "lastName":"Lee", "email":"lee.tina@hotmailx.com"}
  ]);
});

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});
