import { memo } from "react";

console.log("Header rendered.");

function Header() {
  return <div>Header</div>;
}

export default memo(Header);
