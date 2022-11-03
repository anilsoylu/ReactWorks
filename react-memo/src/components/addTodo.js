import { memo } from "react";

function addTodo({ submitHandle, onChange, state }) {
  console.log("addTodo rendered.");
  return (
    <>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button disabled={!state.todo} type="submit">
          Ekle
        </button>
      </form>
    </>
  );
}

export default memo(addTodo);
