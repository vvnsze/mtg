//dependencies
var express = require('express');
var app = express();
var mtg = require('mtgsdk');
var bodyParser = require('body-parser');


//middleware

app.use(express.static(__dirname + '/../client'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



// app.get('/',function(req,res){
//   res.send('Hello World');
// });

app.get('/card',function(req,res){
  mtg.card.find(Math.floor((Math.random() * 800) + 1))
  .then(result => {
      console.log('___line 23___this is the name of the card' ,result.card.name);
      console.log('+++line 23+++result.card' ,result.card);
      res.status(200).send(result.card);
  })
  .catch(error =>{
    res.status(500).send("Didn't get the data");
  });
});

//setting server port
app.set('port', process.env.PORT || 3000);

app.listen( app.get('port'),function(){
  console.log('+++line19 port is working');
});
