import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../context";

function Home() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <hr />
      <br />
      App
      <br />
      {!!user && (
        <div style={{ padding: 10, border: "1px solid red" }}>
          Bu alan sadece giriş yapılınca görünür.
        </div>
      )}
      <br />
      <hr />
      <Footer />
    </>
  );
}

export default Home;
