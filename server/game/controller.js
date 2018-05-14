var express = require('express');
var Game = require('./model');

var app = express.Router();


var game = new Game();

module.exports = app
    .get('/user', (req, res) =>
     res.send( game.GetQuotes(req.query.Person) ) 
    )
    .get('/state', (req, res) => res.send(game))
    .post('/Myexerciselist', (req, res) => res.send( game.FlipPicture() ))
    .post('Record', (req, res) => {
        console.log(req.body);
        
        try {
            game.SubmitMyexerciselist(req.body.Text, req.body.Person);
            res.send( { success: true } );            
        } catch (error) {
            res.status(403).send({ success: false, message: error.message });
        }
    })
    


