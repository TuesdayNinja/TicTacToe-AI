//Artificial Intelligence that can paly turn based game

import GameLogic from './game.js'

var AiTurn = false;

function newBoard(squares){
	var board = squares.slice();
	return board;
}

function turnChecker(humanTurn){
	if(!humanTurn){
		AiTurn = true;
	}
	return;
}

function randomMove(squares){
	var avaibleSquares = GameLogic.emptySquares(squares);
	if(AiTurn){
		const squares = newBoard(squares);
	    if (GameLogic.checkWin(squares) || GameLogic.checkTie(squares)) {
	      return;
	    }
	    var randomIndex = avaibleSquares[Math.floor(Math.random() * avaibleSquares.length)];
	    squares[randomIndex] = GameLogic.aiPlayer;
	    squares = squares;
	    AiTurn = false;
	    return squares;
	}
}











export default {
	turnChecker,
	randomMove
};