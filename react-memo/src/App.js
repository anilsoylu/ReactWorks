import { useState, useReducer, useCallback, useMemo } from "react";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";
import Header from "./components/Header";
import todoReducer from "./reducers/todoReducer";

console.log("App Rendered !");

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
    search: "",
  });

  const [count, setCount] = useState(0);

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });

      // setTodos([...todos, todo]);
      // setTodo("");
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    //setTodo(e.target.value);
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo.toLowerCase("TR").includes(state.search.toLowerCase("TR"))
    );
  }, [state.todos, state.search]);

  return (
    <>
      <Header />

      <h3>{count}</h3>

      <button onClick={() => setCount(() => count + 1)}>Artır</button>

      <hr />

      <h1>Todo App</h1>

      <input
        type="text"
        value={state.search}
        placeholder="Todolarda ara"
        onChange={searchHandle}
      />

      <hr />

      <AddTodo onChange={onChange} submitHandle={submitHandle} state={state} />

      <Todos todos={filteredTodos} />
    </>
  );
}

export default App;
