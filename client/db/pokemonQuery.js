var MongoClient = require('mongodb').MongoClient;

var PokemonQuery = function(){
  this.url = 'mongodb://localhost:27017/top_pokemon';
};

PokemonQuery.prototype = {
  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('pokemon');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }
}

module.exports = PokemonQuery;