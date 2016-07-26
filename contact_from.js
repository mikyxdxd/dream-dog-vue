/**
 * Created by Alex on 2016-07-26.
 */


'use strict'
const express = require('express'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    app = express(),
    port = 3000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {extended: true}
    ));

app.post('/email', function(req,res, next){
    // console.log("POST: ");
    // console.log(req.body);
    let mailOpts, smtptrans, sendText;
    sendText = req.body.message + "/n" + "from: " + req.body.user + " email:" + req.body.email;
    mailOpts = {
        from: req.body.user + ":" + req.body.email,
        to: "smileskyli88@gmail.com",
        subject: 'Website contact form',
        text: sendText,
    };
    smtptrans = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user: "imagemapapp@gmail.com",
            pass: "Whitespot"
        }
    });

    smtptrans.sendMail(mailOpts, function(error, response){
        if (error){
            // console.log("EMAIL ERROR");
            // console.log(error);
            res.json({title: "DreamDog -Contact", msg:"Error Occured", err: true, page:'contact'});
            //res.render('contact', {title: "DreamDog -Contact", msg:"Error Occured", err: true, page:'contact'});
        }else{
            //console.log(response);
            res.json({ title: 'DreamDog - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' });
            //res.render('contact', { title: 'DreamDog - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
        }
    });

});

app.listen(3000);
