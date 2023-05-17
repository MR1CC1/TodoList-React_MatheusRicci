import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css"

const NewTask = ({ onNewTask }) => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [valueInput, setValueInput] = useState("");

  const delTask = () => {
    setValueInput("");
  };

  const onChange = (event) => {
    setValueInput(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      delTask();
    }
  };

  const submit = () => {
    if (onNewTask) {
      onNewTask(valueInput);
      delTask();
    }
  };

  return (
    <input
      className="new-task"
      placeholder="Digite aqui sua Tarefa..."
      value={valueInput}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

NewTask.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};

export default NewTask;
