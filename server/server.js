//dependencies
var express = require('express');
var app = express();
var mtg = require('mtgsdk');
var bodyParser = require('body-parser');


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./client'));

app.get('/',function(req,res){
  res.send('Hello World');
});

//setting server port
app.set('port', process.env.PORT || 3000);

app.listen( app.get('port'),function(){
  console.log('+++line19 port is working');
});
