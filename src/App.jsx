import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import PostAuction from "./pages/PostAuction";
import AuctionDetails from "./pages/AuctionDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Watchlist from "./pages/Watchlist";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  return (
    <Router>
      <NavbarComponent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/post-auction" element={isAuthenticated ? <PostAuction /> : <Navigate to="/signin" />} />
        <Route path="/auction/:id" element={isAuthenticated ? <AuctionDetails /> : <Navigate to="/signin" />} />
        <Route path="/watchlist" element={isAuthenticated ? <Watchlist /> : <Navigate to="/signin" />} />
        <Route path="/notifications" element={isAuthenticated ? <Notifications /> : <Navigate to="/signin" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};

export default App;
