import "./styles/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import LandingPage from "./containers/LandingPage";
import Loading from "./components/Loading";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ChooseRole from "./components/ChooseRole";
import AdminDashboard from "./containers/AdminDashboard";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/choose-role" element={<ChooseRole />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
