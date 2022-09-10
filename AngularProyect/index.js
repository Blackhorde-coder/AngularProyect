var http = require('http');
var express = require('express');
const { ConsoleLogger } = require('@angular/compiler-cli');

var app = express();

app.use(express.json());

app.get('/test', (req, res, next) => {
  return res.send(req.query);
  next();
});

app.get('/test-1/:parametro', (req, res, next) => {
  return res.send(req.params);

});

app.get('/test/:paramTest', midware, respuesta);

const midware =(req, res, next)=>{
  console.log('esta wea cosmica');
  if(req.query.prueba === "2"){
    return res.send('asd');
  }
  next();
}
const respuesta = (req, res, next)=>{
  if(req.query.prueba === "1"){
    return res.send(req.query);
  }
  return res.send(
    {
      params: req.params,
      query: req.query
    }
  )
}

app.post('/test', (req, res, next) =>{
  return res.send(req.body);
  next();
});

var port = '3000';
app.set('port', post);
var server = http.createServer(app);
server.listen(port);
