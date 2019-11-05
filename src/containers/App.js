import React from "react";
import Modal from "../components/Modal";
import Result from "../components/Result";
import Board from "../components/Board";
import sudoku from "sudoku-umd";
import { hot } from "react-hot-loader";

import style from "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialBoard: "",
      board: ""
    };
    this.startNewGame = this.startNewGame.bind(this);
  }

  startNewGame(level) {
    const board = sudoku.generate(level);

    this.setState({
      board,
      initialBoard: board
    });
  }

  render() {
    return (
      <div className={style.container}>
        <h1>Sudoku</h1>
        <Modal />
        <Result />
        <Board
          initialBoard={this.state.initialBoard}
          board={this.state.board}
          handleChange={this.handleChange}
        />
        <div className={style.buttons}>
          <button>Check</button>
          <button>Solve</button>
          <button>Restart</button>
          <button onClick={() => this.startNewGame()}>New Game</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
