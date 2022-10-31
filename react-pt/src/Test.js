import { useEffect, useState } from "react";

function Test() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  useEffect(() => {
    console.log("compopnen ilk yüklendiğinde çalışır");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

    let interval = setInterval(
      () => console.log("interval her saniye calısıyor"),
      1000
    );

    return () => {
      console.log("component destroyed!");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  //   useEffect(() => {
  //     console.log("component render oldu!");
  //   });

  return (
    <div>
      <h3> {postId}</h3>
      {post && JSON.stringify(post)}
      <br />
      <br />
      <button onClick={() => setPostId((postId) => postId + 1)}>
        Sonraki Konu
      </button>
      <hr />
      Test Componenti
    </div>
  );
}

export default Test;
