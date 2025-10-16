// index.js

const express = require('express');
const app = express(); //importing express module (core module)

app.use(express.static(__dirname+'/public'));



app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('index.ejs');
});
app.get('/contact', function(req, res){
    res.render('contact.ejs');
});

app.get('/events', function(req, res){
    res.render('events.ejs');
});

app.get('/faq', function(req, res){
    res.render('faq.ejs');
});

app.get('/guests', function(req, res){
    res.render('guests.ejs');
});


app.listen(5000, function(err){
    if (err)
        console.log("Failed to start the server on port 5000");
    else
        console.log("Server started on port 5000");
});
