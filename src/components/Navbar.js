import React, { useState } from "react";
import {
  MdAccountCircle,
  MdLeaderboard,
  MdHandshake,
  MdFeedback,
  MdPermContactCalendar,
  MdDashboard,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { Link } from "react-router-dom";
function Navbar({ isOpen, setIsOpen }) {
  const menuItems = [
    { icon: MdAccountCircle, label: "Profile", url: "/profile" },
    {
      icon: MdPermContactCalendar,
      label: "Account",
      submenu: ["Accounts", "Account Report", "Account Upload"],
      url: "/",
    },
    { icon: MdLeaderboard, label: "Lead", url: "" },
    { icon: MdHandshake, label: "Deal", url: "" },
    { icon: MdFeedback, label: "Feedback", url: "" },
  ];

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  return (
    <div
      className={`
          fixed top0 pt-20 left-0 z-40 h-full transition-transform duration-300 ease-in-out
          lg:translate-x-0 bg-white border-r w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
    >
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg ">
              <Link
                className="flex items-center w-full "
                to={`${item.url}`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-4" />
                <span>{item.label}</span>
              </Link>
              {item.submenu && (
                <div
                  className={`transform rotate-${isSubMenuOpen ? "0" : "180"}`}
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                >
                  <MdKeyboardArrowDown />
                </div>
              )}
            </div>
            {item.submenu && isSubMenuOpen && (
              <div className="ml-8 mt-2 space-y-2">
                {item.submenu.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
