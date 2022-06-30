import "./styles/App.css";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import LandingPage from "./containers/LandingPage";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Header />

      {isAuthenticated ? (
        <div>
          <Profile></Profile>
        </div>
      ) : (
        <>
          <LandingPage />
        </>
      )}
    </div>
  );
}

export default App;
