var canvas, backgroundImage;

var gameState = 0;
var voterCount;
var allVoters;
var Emailid;
var database;

var form,voter, game;
function preload(){
  backgroundImage=loadImage('download.jpg')
}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage)
 
  }

