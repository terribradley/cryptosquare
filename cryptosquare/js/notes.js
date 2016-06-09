


var cryptosquare = function(phrase) {////we're setting our whole function to variable//////
  var string = phrase.toLowerCase(); //////making variable string and setting th function input to lowercase///////
  string = string.replace(/\s+/g, '');//regularexpression to subtract  spaces////
  var numCharacters = string.length;/////setting a var to "count" the length of inputted string///
  var sqrCharacters = Math.ceil(Math.sqrt(numCharacters));////we set a var to take the squre root of the number f characters with in the string////
  var newString = "";
  var array = [];

  //creates array of arrays
  for (var i = 0; i < sqrCharacters; i++) {////started a for loop that goes through output of the squre root of string length  and created that many arrays with in our empty array defined above (ex square root = 4 so 4 columns)
    array[i] = [];
  };

//populates arrays with string contents
  var counter = 0;
  for (var j = 0; j < sqrCharacters; j++) {///this one is counting/going through spaces in column
    for (var k = 0; k < sqrCharacters; k++) {///this one is going through the rows and assigning a character in the sting to each space
      array[k].push(string.charAt(counter));///chose k arrak b/c j will move once k has moved
      counter++; //////this counter keeps the counting through of the string goind after k anf j have rest b/s they hit sqrcharacter length
    }
  }
//creating new string////
  for (var l = 0; l < sqrCharacters; l++) { ////looping through columns anf rows once more in order to pull th elements out and sswitch them back into a string
    for (var m = 0; m < sqrCharacters; m++) {
      newString = newString + array[l][m]; ///creating a string that is addeding each letter at a time
    }
  }
////put spaces after every five index spaces
  var answerString = "";///defined a new string variable
  counter2 = 0;
  for (var n=5; n < (newString.length + 5); n += 5) { ////for loop that starts at 5th index of our string anf moves through it's length
    debugger;
    answerString = answerString + newString.slice(counter2, n) + " "; ////takes new string and slices a space avery time loop passes that fith index space.
    //////counter2 is inclusive anfd n is exclusive so it enters the space in the n-spot
    counter2+=5;
  }
};








$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#user-input").val();/////////user input defined///
    $("#result").text(cryptosquare(input));////we create a function name and put input inside of paranthesis to creat parameter////////

  });
});
