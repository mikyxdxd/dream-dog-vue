'use strict'

var express = require('express'),
  compress = require('compression'),
  app = module.exports = express(),
  engines = require('consolidate'),
  defaultPort = 80;
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(compress({
  filter: function (req, res) {
    return true;
  }
}));


var oneDay = 86400000;
app.use(express['static'](__dirname, {maxAge: oneDay * 10}));
var bodyParser = require('body-parser');
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


var fs = require('fs');
var https = require('https');
var http = require('http');


app.post('/email', function (req, res, next) {
  // console.log("POST: ");
  // console.log(req.body);
  let mailOpts, smtptrans, sendText;
  sendText = req.body.message + "\n\n\n\n\n" + "from: " + req.body.user + " Email:" + req.body.email;
  mailOpts = {
    from: req.body.user + ":" + req.body.email,
    to: "contact@dreamdogapp.com",
    subject: 'Dreamdog contact form',
    text: sendText,
  };
  smtptrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "imagemapapp@gmail.com",
      pass: "Whitespot"
    }
  });

  smtptrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      // console.log("EMAIL ERROR");
      // console.log(error);
      res.json({title: "DreamDog -Contact", msg: "Error Occured", err: true, page: 'contact'});
      //res.render('contact', {title: "DreamDog -Contact", msg:"Error Occured", err: true, page:'contact'});
    } else {
      //console.log(response);
      res.json({title: 'DreamDog - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact'});
      //res.render('contact', { title: 'DreamDog - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
    }
  });

});

http.createServer(app).listen(defaultPort);
//https.createServer(credentials,app).listen(443);

// app.listen(defaultPort);
console.log('Server starts on ' + defaultPort);
