// import { createElement } from "react";
// import { Alert } from "react-bootstrap";
import { useState } from "react";
import Button from "./components/Button";
import Tab from "./components/Tab";
import "./tailwind.css";
//import "./style.scss";

function Profile() {
  console.log("Profil tabına girdin.");
  return <div>Bursa profile tabı</div>;
}

function App() {
  // const todos = ["todo1", "todo2", "todo3"];
  // function Button(props) {
  //   return <button>{props.text}</button>;
  // }

  // const h1 = createElement("h1", null, "anilsoylu.com");
  // const ul = createElement(
  //   "ul",
  //   null,
  //   todos.map((todo) => createElement("li", null, todo))
  // );
  // const button = createElement(
  //   Button,
  //   {
  //     text: "Button Texti",
  //   },
  //   null
  // );
  // return createElement(
  //   "main",
  //   {
  //     className: "test",
  //     it: "main",
  //   },
  //   h1,
  //   ul,
  //   button
  // );

  /*
  JSX

  class => className
  for => htmlFor
  style='' => style={}
  tabindex => tabIndex
  onclick => onClick
  Javascript ifadelerinin kullanımı
  createElement() metodu
  */
  // const searchFunction = () => {
  //   alert("hello");
  // };

  // const name = "Anıl";
  // const surname = "Soylu";

  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/* <main id="main" className="test">
        <h1 tabIndex="3" style={{ color: "red", backgroundColor: "yellow" }}>
          anilsoylu.com
        </h1>
        <label htmlFor="search" tabIndex={2} onClick={searchFunction}>
          Arama :{" "}
        </label>
        <input type="text" id="search" tabIndex={1} />
        <hr />
        {`${name} ${surname}`}
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
        <Button text="Merhaba Buton" />
      </main> */}

      <div style={{ padding: 20 }}>
        <Button text="Button Adı" />
        <Button text="Button Adı" variant="success" />
        <Button text="Button Adı" variant="danger" />
        <Button text="Button Adı" variant="info" />
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>

      <Tab
        activeTab={activeTab}
        onChange={(tabIndex) => setActiveTab(tabIndex)}
      >
        <Tab.Panel title="Profil">
          <Profile />
        </Tab.Panel>
        <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
      </Tab>
      {activeTab === 2 && <div>burası da ekstra bir alan!</div>}
    </>
  );
}

export default App;
