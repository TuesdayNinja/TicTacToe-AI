const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const aiPlayer = 'O';
const humanPlayer = 'X';


  function checkWin(squares){
  for(let i=0; i < winningLines.length; i++){
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;

}

function emptySquares(squares){
  const empty = [];
  for(let i=0; i < 9; i++){
    if ( squares[i] === null){
      empty.push(i);
    }
  }
  return empty;
}


function checkTie(squares){
  if(emptySquares(squares).length == 0){
    return true;
	 }
 return;
}


export default {
  winningLines,
  checkWin,
  checkTie,
  emptySquares,
  aiPlayer,
  humanPlayer
};