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
      showModal: false,
      initialBoard: "",
      board: "",
      newGame: false
    };
    this.startNewGame = this.startNewGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  startNewGame(level) {
    const board = sudoku.generate(level);

    this.setState({
      showModal: !this.state.showModal,
      board,
      initialBoard: board,
      Information: "Good luck :) !!",
      InformationStyles: style.info,
      newGame: true
    });
  }

  handleChange(value, index) {
    if (value > 0 && value <= 9) {
      let newBoard = this.state.board.split("").map((val, i) => {
        if (i === index) {
          return Number(value);
        }
        return val;
      });
      this.setState({ board: newBoard.join("") });
    } else if (value === "") {
      let newBoard = this.state.board.split("").map((val, i) => {
        if (i === index) {
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
      Information: "Good luck !!"
    });
  }

  solveTheGame() {
    const solve = sudoku.solve(this.state.board);
    if (solve) {
      this.setState({ board: solve });
    } else {
      this.setState({
        Information: "You made mistake.."
      });
    }
  }

  check() {
    const solvedBoard = sudoku.solve(this.state.board);
    if (solvedBoard && !this.state.board.includes(".")) {
      this.setState({
        Information: "You have SOLVED Sudoku correctly :) !!"
      });
    } else if (solvedBoard) {
      this.setState({
        Information: "You're doing fine :)"
      });
    } else {
      this.setState({
        Information: "You made mistake somewhere.."
      });
    }
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const {
      showModal,
      Information,
      InformationStyles,
      initialBoard,
      board,
      newGame
    } = this.state;

    return (
      <div className={style.container}>
        <h1 className={newGame ? style.mainTitle : style.startTitle}>Sudoku</h1>
        <p className={newGame ? style.none : style.subTitle}>Let's play !!</p>
        <Modal show={showModal} action={this.startNewGame} />
        <Result Information={Information} className={InformationStyles} />
        <Board
          initialBoard={initialBoard}
          board={board}
          handleChange={this.handleChange}
        />
        <div className={style.buttons}>
          <button
            className={newGame ? "" : style.startButton}
            onClick={() => this.toggleModal()}
          >
            New Game
          </button>

          {newGame ? <button onClick={() => this.check()}>Check</button> : ""}

          {newGame ? (
            <button onClick={() => this.solveTheGame()}>Solve the Game</button>
          ) : (
            ""
          )}

          {newGame ? <button onClick={() => this.reset()}>Restart</button> : ""}
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
