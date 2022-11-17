import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<NoMatch />} useLocation={useLocation} />
      </Routes>
    </Router>
  );
}

export default App;
