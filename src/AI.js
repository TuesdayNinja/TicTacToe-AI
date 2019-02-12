//Artificial Intelligence that can paly turn based game

import GameLogic from './game.js'


function turnChecker(squares, humanTurn){
	if(!humanTurn){
		return randomMove(squares);
	}
	return squares;
}

function randomMove(squares){
 var availableSquares = GameLogic.emptySquares(squares);
    if (GameLogic.checkWin(squares) || GameLogic.checkTie(squares)) {
      return squares;
    }
    var randomIndex = availableSquares[Math.floor(Math.random() * availableSquares.length)];
    squares[randomIndex] = GameLogic.aiPlayer;
    return squares;
}







export default {
	turnChecker,
	randomMove
};