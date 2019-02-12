//Artificial Intelligence that can paly turn based game

import GameLogic from './game.js'

var AiTurn = false;

function turnChecker(humanTurn){
	if(!humanTurn){
		AiTurn = true;
	}
	return;
}

function randomMove(squares){
	var avaibleSquares = GameLogic.emptySquares(squares);
	if(AiTurn){
		const squares = squares.slice();
	    if (GameLogic.checkWin(squares) || GameLogic.checkTie(squares)) {
	      return;
	    }
	    var randomIndex = avaibleSquares[Math.floor(Math.random() * avaibleSquares.length)];
	    squares[randomIndex] = 'O';
	    squares = squares;
	    AiTurn = false;
	    return squares;
	}
}


function minimax(squares){
	
}



export default {
	turnChecker,
	randomMove
};