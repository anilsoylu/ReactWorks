import React from "react";

function Todo({ text, todos, setTodos, todo, filteredTodos, setAlertDelete }) {
  const deleteHandler = () => {
    setTodos(filteredTodos.filter((el) => el.id !== todo.id));
    setAlertDelete(true);
    setTimeout(() => {
      setAlertDelete(false);
    }, 1500);
  };

  const completeHander = () => {
    setTodos(
      filteredTodos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className={`todo${todo.completed ? " completed" : ""}`}>
        <button className="complete-btn" onClick={completeHander}>
          <i className="fas fa-check-circle"></i>
        </button>
        <li className="todo-item">{text}</li>
        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fa fa-minus-circle"></i>
        </button>
      </div>
    </>
  );
}

export default Todo;
