import React from "react";

const Tile = props => {
  return (
    <input
      className={props.className}
      type="number"
      min="1"
      max="9"
      value={props.value}
      onChange={props.handleChange}
      disabled={props.disabled}
    />
  );
};

export default Tile;
