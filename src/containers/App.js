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
    this.handleChange = this.handleChange.bind(this);
  }

  startNewGame(level) {
    const board = sudoku.generate(level);

    this.setState({
      board,
      initialBoard: board,
      Information: "Powodzenia !!",
      InformationStyles: style.info
    });
  }

  handleChange(value, index) {
    if (value > 0 && value <= 9) {
      let newBoard = this.state.board.split("").map((val, i) => {
        if (i == index) {
          return Number(value);
        }
        return val;
      });
      this.setState({ board: newBoard.join("") });
    } else if (value === "") {
      let newBoard = this.state.board.split("").map((val, i) => {
        if (i == index) {
          return ".";
        }
        return val;
      });
      this.setState({ board: newBoard.join("") });
    }
  }

  reset() {
    this.setState({
      board: this.state.initialBoard,
      Information: "Do dzieła !!"
    });
  }

  solveTheGame() {
    const solve = sudoku.solve(this.state.board);
    if (solve) {
      this.setState({ board: solve });
    } else {
      this.setState({
        Information: "Zrobiłeś błąd"
      });
    }
  }

  check() {
    const solvedBoard = sudoku.solve(this.state.board);
    if (solvedBoard && !this.state.board.includes(".")) {
      this.setState({
        Information: "Rozwiązałeś poprawnie Sudoku :) !!"
      });
    } else if (solvedBoard) {
      this.setState({
        Information: "Dobrze Ci idzie :)"
      });
    } else {
      this.setState({
        Information: "Gdzieś popełniłeś błąd.."
      });
    }
  }

  render() {
    return (
      <div className={style.container}>
        <h1>Sudoku</h1>
        <Modal />
        <Result
          Information={this.state.Information}
          className={this.state.InformationStyles}
        />
        <Board
          initialBoard={this.state.initialBoard}
          board={this.state.board}
          handleChange={this.handleChange}
        />
        <div className={style.buttons}>
          <button onClick={() => this.check()}>Check</button>
          <button onClick={() => this.solveTheGame()}>Solve the Game</button>
          <button onClick={() => this.reset()}>Restart</button>
          <button onClick={() => this.startNewGame()}>New Game</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
