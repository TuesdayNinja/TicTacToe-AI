import React, { Component } from 'react';
import './App.css';
import GameLogic from './game.js'
import AI from './AI.js'



function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}>
        {props.value}
    </button>
  );
}


class Board extends Component{

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      humanTurn: true,
    };
  }

  //Sets gamemoves to squares
  handleClick(i) {
    const squares = this.state.squares.slice();
    //Checks if game is already played
    if (GameLogic.checkWin(squares) || squares[i]) {
      return;
    }
    //Sets humans move to picked square
    squares[i] = GameLogic.humanPlayer;
    this.setState({
      squares: squares,
      humanTurn: false,
    }, () => {
      //Sets AIs move to picked square
      this.setState({
        squares: AI.turnChecker(this.state.squares.slice(), false),
        humanTurn: true,
      })
      //console.log(squares);
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

  //empties square indexes for new game
  clearBoard = () => {
    var squares = this.state.squares.slice();
    squares = Array(9).fill(null)
    this.setState({
      squares: squares,
      humanTurn: true,
    });
  }


  render(){
    const winner = GameLogic.checkWin(this.state.squares);
    const tie = GameLogic.checkTie(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else if (tie) {
      status = 'Tie';
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
        <div className="button-container">
        <button onClick={this.clearBoard}>New Game</button>
        </div>
      </div>
    );
  }

}


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
