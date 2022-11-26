import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/Post";
import "./feed.css";
import Skeleton from "../skeleton/Skeleton";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/videos");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      {!!isLoading ? (
        <Skeleton type="custom" /* other type => feed - circle - custom */ />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Feed;
