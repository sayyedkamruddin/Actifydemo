import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Accounts from "./screens/Accounts";
import Router from "./routes/Router";
import { useSelector } from "react-redux";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="bg-white border-b px-4 py-3 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center gap-5">
          <FiMenu
            color="black"
            size={30}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden"
          />
          <p className="font-bold text-2xl">Job Portal</p>
        </div>
      </div>

      <div className="lg:ml-64 border2 overflow-yhidden top20 h-100">

        <Router
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </div>
  );
};

export default App;
