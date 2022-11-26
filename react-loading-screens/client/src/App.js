import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./components/feed/Feed";
import Siderbar from "./components/sidebar/Siderbar";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/user/1");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  return (
    <div className="container">
      <Siderbar isLoading={isLoading} />
      <div className="home">
        <Topbar isLoading={isLoading} />
        <Feed />
      </div>
    </div>
  );
};

export default App;
