import logo from "./logo.svg";
import { useEffect } from "react";
import Test from "./Test";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./components/Tailwind";

//import "./tailwind.css";
import "./style.scss";
import style from "./App.module.css";

function Styles() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // analytics bilgilendirme
    }
  });
  return (
    <div className={style.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>

      <p className="env">
        {process.env.REACT_APP_API_URL}
        <span>test</span>
      </p>

      <Test />

      <Bootstrap />

      <hr />

      <Tailwind />

      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt="" />
          <img src={logo} alt="" />
        </>
      )}
    </div>
  );
}

export default Styles;
