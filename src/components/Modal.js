import React from "react";

const Modal = props => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div>
        <h3>Wybierz poziom trudności gry:</h3>
        <div>
          <button onClick={() => props.action("easy")}>Easy</button>
          <button onClick={() => props.action("medium")}>Medium</button>
          <button onClick={() => props.action("hard")}>Hard</button>
          <button onClick={() => props.action("very-hard")}>Very hard</button>
          <button onClick={() => props.action("insane")}>Insane</button>
          <button onClick={() => props.action("inhuman")}>Inhuman :p</button>
        </div>
      </div>
    );
  }
};

export default Modal;
