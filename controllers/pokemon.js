var express = require('express');
var app = express();
var pokeRouter = express.Router();

var PokemonQuery = require('../client/db/PokemonQuery');
var query = new PokemonQuery();

pokeRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

module.exports = pokeRouter;