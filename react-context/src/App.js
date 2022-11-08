import Home from "./components/Home";
import { SiteContext, AuthContext } from "./context";

function App() {
  return (
    <SiteContext>
      <AuthContext>
        <Home />
      </AuthContext>
    </SiteContext>
  );
}

export default App;
