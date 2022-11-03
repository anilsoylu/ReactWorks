import { memo } from "react";

function TodoItems({ todo }) {
  console.log("Todo Items rendered.");
  return (
    <>
      <li>{todo}</li>
    </>
  );
}

export default memo(TodoItems);
