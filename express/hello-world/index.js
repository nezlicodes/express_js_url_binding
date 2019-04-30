const express = require('express');

// import the built-in path module
const path = require('path');


const app = express();

/* var things = require('./things.js');
app.use('/things', things); */ 


// setting the views directory to views dir 
app.set('views', path.join(__dirname, 'views'))
//set the view engine to the mustache 

app.set('view engine', 'mustache')
//specify the hogan-middleware for the express config
app.engine('mustache', require('hogan-middleware').__express)

app.get('/', (req, res, next) => {
    res.send('Hello world')
})

app.get('/json', (req, res, next) => {
    const data = {
        greeting : "hello",

    } 
    res.json(data)
})

app.get('/home', (req, res) => {
    res.render('home', null)
})

app.get('/things/:name/:id', (req, res, next) => {
    res.send('id: ' + res.params.id + ' name: ' + req.params.name)
})

app.listen(3000);