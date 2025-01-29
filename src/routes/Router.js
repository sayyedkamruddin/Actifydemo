import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accounts from "../screens/Accounts";
import Profile from "../screens/Profile";
import Navbar from "../components/Navbar";

function Router({ isSidebarOpen,setIsSidebarOpen }) {
  return (
    <BrowserRouter>
      <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
