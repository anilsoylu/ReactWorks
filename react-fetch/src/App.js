import { getPosts, getPostDetail, newPost, UserService } from "./services";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    getPosts().then((res) => console.log(res));
    getPostDetail(2).then((res) => console.log(res));
    newPost({
      userId: 3,
      title: "Test Başlık",
      body: "Test İçerik",
    }).then((res) => console.log(res));
    UserService.getUsers();
  }, []);

  return <>App</>;
}

export default App;
