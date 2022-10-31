import "./App.css";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="align-self-center col-md-5 bg-info p-3">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
