import React, { Component } from 'react';
import './App.css';

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

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}>
        {props.value}
    </button>
  );
}


// var gameState = {
//   const squares = Array(9).fill(null);
//   const humanTurn = true;
// }


class Board extends Component{

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      humanTurn: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (checkWin(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.humanTurn ? 'X' : 'O';
    this.setState({
      squares: squares,
      humanTurn: !this.state.humanTurn,
    });
  }


  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }


  render(){
    const winner = checkWin(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else {
      status = 'Next player: ' + (this.state.humanTurn ? 'X' : 'O');
    }

    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

}

function checkWin(squares){
  for(let i=0; i < winningLines.length; i++){
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

// function checkTie(squares){
//   if(emptySquares().length == 0){
//     return true;
//   }
//   return;
// }

/*function emptySquares(squares){
  const empty = [];
  for(let i=0; i < 9; i++){
    if ( squares[i] === 0){
      empty.push(i);
    }
  }
  return empty;
}*/


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="board">
          <Board/>
        </div>
      </div>
    );
  }
}



export default App;