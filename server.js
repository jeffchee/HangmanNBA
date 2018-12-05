var express = require('express');
var path = require('path');

var app = express();


app.use(express.static('assets'));

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + 'index.html'));
});


app.listen(PORT, function(){
    console.log("listening on port " + PORT);
})