import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <img src="/logo192.png" alt="" />
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
