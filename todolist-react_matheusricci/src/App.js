import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import NewTask from "./components/NewTask";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const onNewTask = (valueInput) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: valueInput,
        checked: false,
      },
    ]);
  };

  const onToggle = (task) => {
    setTasks(
      tasks.map((obj) =>
        obj.id === task.id ? { ...obj, checked: !task.checked } : obj
      )
    );
  };

  const onRemove = (task) => {
    setTasks(tasks.filter((obj) => obj.id !== task.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">
          To-Do List
          <p>ReactJS</p>
          <p>
            <a href="https://www.linkedin.com/in/matheus-ricci-228a06182/">
              Matheus Ricci
            </a>
          </p>
        </h1>
      </header>
      <section className="main">
        <NewTask onNewTask={onNewTask} />
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id.toString()}>
              <span
                className={["task", task.checked ? "checked" : ""].join(" ")}
                onClick={() => onToggle(task)}
                onKeyDown={() => onToggle(task)}
                role="button"
                tabIndex={0}
              >
                {task.title}
              </span>
              <button
                className="remove"
                type="button"
                onClick={() => onRemove(task)}
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
