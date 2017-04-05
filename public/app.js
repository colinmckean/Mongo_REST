var makeRequest = function (url, callback) {

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function () {
  if (this.status !== 200) {
    return;
  }
  var jsonString = this.responseText;
  var apiResonceObject = JSON.parse(jsonString);
  buildOutput(apiResonceObject);
};

var buildOutput = function (pokemon) {
  var mainDiv = document.querySelector('#pokemon-cage');
  pokemon.forEach(function (poke) {
    var name = buildElement('h2', poke.name, "");
    var e_against = buildElement('p' , poke.effective_against, "effective against: ");
    var type = buildElement('p', poke.type, "type: " );
    var number = buildElement('p' ,poke.number, "number: ");
    var img = document.createElement('img');
    img.src = poke.img;

    var pokeDiv = document.createElement('div');
    appender(pokeDiv, [ name, e_against, type, number, img ]);
    appender(mainDiv, [pokeDiv]);
  });
}

var buildElement = function (tag, content, label){
  var tag = document.createElement(tag);
  tag.innerText = label + content;
  return tag;
}

var appender = function(parent, children){
  for(child of children){

    parent.appendChild(child);
  }
  return parent;
}

var app = function () {
  var url = "http://localhost:3000/api/pokemon"
  makeRequest(url, requestComplete);
};
window.onload = app;