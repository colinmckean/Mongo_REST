use top_pokemon;
db.dropDatabase();
db.pokemon.insert([
{
  name: "Dragonite",
  number: 149,
  type: "Dragon/Flying",
  effective_against: "Anything except Steel or Fairy Pokémon",
  img: "http://localhost:3000/img/Dragonite.jpg"
},
{
  name: "Snorlax",
  number: 143,
  type: "Normal",
  effective_against: "Anything except Rock or Steel Pokémon",
  img: "http://localhost:3000/img/Snorlax.jpg"
},
{
  name: "Lapras",
  number: 131,
  type: "Water/Ice",
  effective_against: "Flying, Ground and Rock Pokémon",
  img: "http://localhost:3000/img/Lapras.jpg"
}])