/*
    File: HW8: Scrabble!
    Taylor Yoeuth
    Contact: taylor_yoeuth@student.uml.edu
    Currently an Undergrad Computer Science Student
    At UMass Lowell taking course 91.61 GUI Programming I.
    Created August 11,2020
*/
var score = 0;
var value = ""; // hold the value of score
var scrabble_board = []; // creates the array for the tiles to be placed
var tiles = 0;
//taken from json file
var ScrabbleTiles = [
  { "letter": "A", "value": 1, "amount": 9 },
  { "letter": "B", "value": 3, "amount": 2 },
  { "letter": "C", "value": 3, "amount": 2 },
  { "letter": "D", "value": 2, "amount": 4 },
  { "letter": "E", "value": 1, "amount": 12 },
  { "letter": "F", "value": 4, "amount": 2 },
  { "letter": "G", "value": 2, "amount": 3 },
  { "letter": "H", "value": 4, "amount": 2 },
  { "letter": "I", "value": 1, "amount": 9 },
  { "letter": "J", "value": 8, "amount": 1 },
  { "letter": "K", "value": 5, "amount": 1 },
  { "letter": "L", "value": 1, "amount": 4 },
  { "letter": "M", "value": 3, "amount": 2 },
  { "letter": "N", "value": 1, "amount": 5 },
  { "letter": "O", "value": 1, "amount": 8 },
  { "letter": "P", "value": 3, "amount": 2 },
  { "letter": "Q", "value": 10, "amount": 1 },
  { "letter": "R", "value": 1, "amount": 6 },
  { "letter": "S", "value": 1, "amount": 4 },
  { "letter": "T", "value": 1, "amount": 6 },
  { "letter": "U", "value": 1, "amount": 4 },
  { "letter": "V", "value": 4, "amount": 2 },
  { "letter": "W", "value": 4, "amount": 2 },
  { "letter": "X", "value": 8, "amount": 1 },
  { "letter": "Y", "value": 4, "amount": 2 },
  { "letter": "Z", "value": 10, "amount": 1 }
];

$(document).ready(function () {
  makeStripSlots();
  getTiles();
  getTotalTiles();
  dragtodrop();
  //calculate();
});

function getTiles() {
  var letter;
  var random;

  for (var i = 0; i < 7; i++) {
    random = Math.floor((Math.random() * 25));
    letter = ScrabbleTiles[random].letter;
    $("#tileholder").append("<img class= rack id='" + letter + "' value=" + ScrabbleTiles[random].value + "\ src='Scrabble_Tiles/Scrabble_Tile_" + letter + ".jpg'></img>");// gets the images of the individual tiles
    }
    //console.log(Scrabble_Tiles); //use this to see if it was grabbing the images

};

function getTotalTiles() {
  var totaltiles = 0;
  for (let rack = 0; rack < ScrabbleTiles.length; rack++) {
    totaltiles += ScrabbleTiles[rack].amount;
  }
  console.log(totaltiles);
  return totaltiles;
};

// this is used to drag the tiles onto the tileholder
function dragtodrop() {

  $(".rack").draggable();
  $(".stripSlot").droppable({accept: '.rack',activeClass: "ui-state-highlight",
    drop: function Drop(event, ui) {
      //alert('hello'); //used this to see if the tile was actually being placed in array
      $(this).droppable('option', 'accept', ui.draggable);
       $(this).append(`<img class="rack" id="${event.toElement.id}" value= "${event.toElement.value}"src="${event.toElement.src}"></img>`);
       $(event.toElement).remove(); // removes the element from tile holder so you dont have a duplicate
       scrabble_board.push({ id: this.id, letter: ui.draggable[0].id });
       var letter = ui.draggable.prop('id'); // this grabs the letter id from the tile
       var element = $(this).attr("id");

       //scrabble_board[element].push({letter, value});

/*     //this does not work, tried setting the value of the letter to the array so i can iterate it through ScrabbleTiles
         scrabble_board[element]= {letter, value}; // each index is holding a value and the letter
         for(let i =0; i <scrabble_board.element; i++){ //iterate through to get the value of the letter
           ScrabbleTiles[i].element = value;
         }
*/
       //console.log(letter);
       //console.log(element);

       updateBoard();
     }

  });
};

function updateBoard() {
  var word = "";
  for (var i = 0; i < 7 ; i++) {
    word += getKey(i);
  }
  document.getElementById('word').innerHTML = "Word: " + word + value;
  document.getElementById('tiles-left').innerHTML = "Tiles Left: " + (scrabble_board.length);

}

function getKey(position) {
  var r = '.';
  for (var i = 0; i < scrabble_board.length; i++) {
    if (scrabble_board[i].id == position) {
      r = scrabble_board[i].letter;
    }
  }
  return r;
}

// function to create the slots in the array
function makeStripSlots() {
  for (var i = 0; i < 15; i++) {
    scrabble_board.push({ 'letter': '', 'value': 0 });// hold postion of each scrabble letter
    $("#tileboard").append('<div class="stripSlot" \id="' + i.toString() + '"></div>'); // makes the image again
;  }
};

function reset(){
  scrabble_board.empty()
};
