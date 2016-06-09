var cryptosquare = function(phrase) {
  var string = phrase.toLowerCase();
  string = string.replace(/\s+/g, '');
  var numCharacters = string.length;
  var sqrCharacters = Math.ceil(Math.sqrt(numCharacters));
  var newString = "";
  var array = [];

  //creates array of arrays
  for (var i = 0; i < sqrCharacters; i++) {

    array[i] = [];
  };

//populates arrays with string contents
  var counter = 0;
  for (var j = 0; j < sqrCharacters; j++) {
    for (var k = 0; k < sqrCharacters; k++) {
      array[k].push(string.charAt(counter));
      counter++
    }
  }

  for (var l = 0; l < sqrCharacters; l++) {
    for (var m = 0; m < sqrCharacters; m++) {

      newString = newString + array[l][m];
    }
  }

  var answerString = "";
  counter2 = 0;
  for(var n=5; n < (newString.length + 5); n += 5) {
    debugger;
    answerString = answerString + newString.slice(counter2, n) + " ";
    counter2+=5;
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#user-input").val();
    $("#result").text(cryptosquare(input));

  });
});
