import React from "react";
import Tile from "./Tile";
import style from "../containers/App.css";

const Board = props => {
  const boardSplit = props.board.split("");
  const initialBoardSplit = props.initialBoard.split("");

  const value = boardSplit.map((number, index) => {
    return (
      <Tile
        className={style.tile}
        key={index}
        value={number === "." ? "" : number}
        disabled={
          number === initialBoardSplit[index] && number != "." ? true : false
        }
        handleChange={props.handleChange}
        index={index}
      />
    );
  });
  return <div className={style.board}>{value}</div>;
};

export default Board;
