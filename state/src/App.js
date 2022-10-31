import { useState } from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

function App() {
  const [name, setName] = useState("Anıl");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Cengizhan", "Yunus", "Melez"]);
  const [address, setAddress] = useState({ title: "İzmir", zip: 35850 });

  return (
    <div className="App">
      <InputExample />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Counter />
      {/* <h1>Merhaba {name}!</h1>
      <h3>{age}</h3>
      <button onClick={() => setName("Cengizhan")}>Change Name</button>
      &nbsp;
      <button onClick={() => setAge(18)}>Change Age</button>
      <hr />
      <br />
      <br />
      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Veli"])}>
        Add New Friend
      </button>
      <hr />
      <br />
      <br />
      <h2>Address</h2>
      <div>
        {address.title} - {address.zip}
      </div>
      <br />
      <button
        onClick={() => setAddress({ ...address, title: "Konya", zip: 42000 })}
      >
        Change Address
      </button> */}
    </div>
  );
}

export default App;
