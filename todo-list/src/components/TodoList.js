import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos, setAlertDelete }) {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {!!filteredTodos &&
            filteredTodos.map((todo) => (
              <Todo
                text={todo.text}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                setAlertDelete={setAlertDelete}
              />
            ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
