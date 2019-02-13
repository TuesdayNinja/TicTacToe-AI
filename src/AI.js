//Artificial Intelligence that can paly turn based game

import GameLogic from './game.js'

//calls movemaking function if it is AIs turn.
function turnChecker(squares, humanTurn){
	//Finds avaible square indexes
	var availableSquares = GameLogic.emptySquares(squares);
	//Checks if it is AI turn and if game is not yet won or tied
	if(!(humanTurn) && !(GameLogic.checkWin(squares) || GameLogic.checkTie(squares))){
		return randomMove(squares, availableSquares);
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
function minimax(squares){

}







export default {
	turnChecker,
	randomMove
};