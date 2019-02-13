//Artificial Intelligence that can paly turn based game

import GameLogic from './game.js'

//for the minimax
var depht = 0;

//calls movemaking function if it is AIs turn.
function turnChecker(squares, humanTurn){
	//Finds avaible square indexes
	var availableSquares = GameLogic.emptySquares(squares);

	//Checks if it is AI turn and if game is not yet won or tied
	if(!(humanTurn) && !(GameLogic.checkWin(squares) || GameLogic.checkTie(squares))){

		//Calls funktion making random moves
		//return randomMove(squares, availableSquares);

		//Calls funktion using minimax
		return bestMove(squares);

	}
	return squares;
}

//Returns random free square index
function randomMove(squares, availableSquares){
    //Picks random square index to make move in
    var randomIndex = availableSquares[Math.floor(Math.random() * availableSquares.length)];
    squares[randomIndex] = GameLogic.aiPlayer;
    return squares;
}

//Returns best free square index
function minimax(squares, player){
	depht++;

	squares = squares.slice();

	var availableSquares = GameLogic.emptySquares(squares);

	//check scores
	if(GameLogic.checkWin(squares) == GameLogic.humanPlayer){
		return {score: -10};
	}
	else if (GameLogic.checkWin(squares) == GameLogic.aiPlayer) {
		return {score: 10};
	}
	else if (GameLogic.checkTie(squares)) {
		return {score: 0};
	}

	//helping array to collect objects
	var moves = [];
	//const helpSquares = squares.slice();

	for (let i = 0; i < availableSquares.length; i++) {
		//creates object to each move and stores index
		var move = {};
		move.index = availableSquares[i];
		//Sets avaible square to player
		squares[availableSquares[i]] = player;

		if (player == GameLogic.aiPlayer) {
			var result = minimax(squares, GameLogic.humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax(squares, GameLogic.aiPlayer);
			move.score = result.score;
		}

		//reset spot to be empty
		squares[availableSquares[i]] = null;

		//store object to array
		moves.push(move);
	}

	var bestMoveIndex;
	if(player === GameLogic.aiPlayer) {
		var bestScore = -10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMoveIndex = i;
			}
		}
	}
	else {
		var bestScore = 10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMoveIndex = i;
			}
		}
	}

	//returns object
    return moves[bestMoveIndex];
}

//gets index out of object
function bestMove(squares){
 var bestMove = minimax(squares, GameLogic.aiPlayer);
 squares = squares.slice();
 squares[bestMove.index] = GameLogic.aiPlayer;
 return squares;
}











export default {
	turnChecker,
	randomMove,
	minimax,
};