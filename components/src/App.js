import "./App.css";
import User from "./components/User";

const friends = [
  {
    name: "Cengizhan",
  },
  {
    name: "Yunus",
  },
  {
    name: "Melez",
  },
];

function App() {
  return (
    <div>
      <User
        name="Anıl"
        surname="Soylu"
        age={28}
        isLoggedIn={true}
        friends={friends}
        address={{
          title: "Torbali / Izmir",
          zip: 35850,
        }}
      />
    </div>
  );
}

export default App;
