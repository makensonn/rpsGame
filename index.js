/*
Makenson Noel
Game of Rock, Paper, Scissors Game 
*/

const title = "Simulated game of Rock Paper Scissors, Best out of 3";
const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";
const pcWins = "PC  W I N S ";
const aiWins = "AI  W I N S ";
const tied = "Tied game";
const game = "Game";
let gameCount = 0;


var answer; 
var AI = [Rock, Paper, Scissors];
var PC = [Rock, Paper, Scissors];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * max);
};

//Functions for Rock Paper Scissors Game 

/*Currently the game is simulated, computer vs computer, 
I'll be adding a mode for player vs player and computer vs player.*/ 

const RPS = (AI, PC) => {

  const ran = getRandomInt(1,3);
  const rand = getRandomInt(1,3);

	console.log(AI[ran]);
	console.log(PC[rand]);

	if (AI[ran] == PC[rand]){console.log(tied);}
	else if (AI[ran] == Rock && PC[rand] == Paper){console.log(pcWins);}
	else if (AI[ran] == Paper && PC[rand] == Rock){console.log(aiWins);}
	else if (AI[ran] == Scissors && PC[rand] == Paper) {console.log(pcWins);}
	else if (AI[ran] == Paper && PC[rand] == Scissors){console.log(aiWins);}
	else if (AI[ran] == Rock && PC[rand] == Scissors){console.log(aiWins);}
	else if (AI[ran] == Scissors && PC[rand] == Rock) {console.log(pcWins);}
};
console.log(title + "\n");

for(let i =0; i < 3; i++){console.log(game + ": " + gameCount++); RPS(AI, PC); console.log("\n");}