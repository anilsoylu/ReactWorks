import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("Anıl");
  const [avatar, setAvatar] = useState(false);
  const [users, setUsers] = useState(false);

  const addPost = (data) => {
    const headers = new Headers();
    // headers.append("Content-type", "application/json;charset=utf-8;");
    headers.append("Authorization", "Bearer Anil123abc");

    const formData = new FormData();
    formData.append("userId", data.userId);
    formData.append("title", data.title);
    formData.append("body", data.body);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      //body: JSON.stringify(data),
      body: formData,
      headers: {
        headers: headers,
        // headers: headers,
        // "Content-type": "application/json;charset=utf-8",
        // Authorization: "Bearer 123123123123",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!!res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

    addPost({
      userId: 1,
      title: "Örnek Post1",
      body: "Post içeriği",
    });
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();

    console.log("Submit edildi.");
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="file"
          name="avatar"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <br />
        <br />
        <button type="submit" disabled={!name || !avatar}>
          Kaydet
        </button>
      </form>

      <h1>User List</h1>
      <ul>
        {!!users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
