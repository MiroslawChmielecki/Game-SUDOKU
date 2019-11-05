import React from "react";
import style from "../containers/App.css";

const Modal = props => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className={style.overlay}>
        <div className={style.modal}>
          <h1>Select game difficulty level:</h1>
          <div className={style.buttons}>
            <button onClick={() => props.action("easy")}>Easy</button>
            <button onClick={() => props.action("medium")}>Medium</button>
            <button onClick={() => props.action("hard")}>Hard</button>
            <button onClick={() => props.action("very-hard")}>Very hard</button>
            <button onClick={() => props.action("insane")}>Insane</button>
            <button onClick={() => props.action("inhuman")}>Inhuman :p</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
