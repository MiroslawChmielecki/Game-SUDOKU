import React from "react";

const Tile = props => {
  return (
    <input
      className={props.className}
      type="number"
      min="1"
      max="9"
      value={props.value}
      onChange={event => props.handleChange(event.target.value, props.index)}
      disabled={props.disabled}
    />
  );
};

export default Tile;
