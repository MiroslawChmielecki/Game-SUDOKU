import React from "react";
import Tile from "./Tile";

const Board = props => {
  const boardSplit = props.board.split("");
  const initialBoardSplit = props.initialBoard.split("");

  const value = boardSplit.map((number, index) => {
    return (
      <Tile
        key={index}
        value={number === "." ? "" : number}
        disabled={
          number === initialBoardSplit[index] && number != "." ? true : false
        }
        handleChange={event => props.handleChange(index, event.target.value)}
      />
    );
  });
  return <div>{value}</div>;
};

export default Board;
