import { memo } from "react";
import TodoItems from "./TodoItems";

function Todos({ todos }) {
  console.log("Todos rendered.");
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <TodoItems key={i} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default memo(Todos);
