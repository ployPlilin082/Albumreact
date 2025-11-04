import React, { useEffect, useState,useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import type { User } from "../Models/User";


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
   const navigating = useRef(false);

  useEffect(() => {
    loadUser();
    const handleAuthChange = () => loadUser();
    window.addEventListener("storage", loadUser);
    window.addEventListener("auth-change", handleAuthChange);
    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("auth-change", handleAuthChange);
    };
  }, []);

  const loadUser = () => {
    const stored = localStorage.getItem("eventUser");
    setLoggedUser(stored ? (JSON.parse(stored) as User) : null);
  };

useEffect(() => {
  const user = localStorage.getItem("eventUser");
  if (navigating.current) return;


  if (!user && location.pathname.startsWith("/list")) {
    if (location.pathname !== "/home") {
      navigating.current = true;
      navigate("/home", { replace: true });
      setTimeout(() => (navigating.current = false), 100);
    }
    return;
  }

  
  if (user && ["/home", "/login"].includes(location.pathname)) {
    if (location.pathname !== "/list") {
      navigating.current = true;
      navigate("/list", { replace: true });
      loadUser();
      setTimeout(() => (navigating.current = false), 100);
    }
  }
}, [location.pathname]);


  const logout = () => {
    localStorage.removeItem("eventUser");
    setLoggedUser(null);
    window.dispatchEvent(new Event("auth-change"));
    navigate("/home");
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-light"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(214,51,132), rgba(214,51,132))",
        backgroundPosition: "top left",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container">
        <div className="collapse navbar-collapse show" id="navbar6">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/home">
                <b>Home</b>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/list">
                <b>List</b>
              </NavLink>
            </li>
          </ul>
          {loggedUser ? (
            <div className="d-flex align-items-center text-white">
              <h6 className="mb-0 me-3">👋 {loggedUser.Name || "User"}</h6>
              <button
                onClick={logout}
                className="btn btn-link text-white p-0"
              >
                <b>Logout</b>
              </button>
            </div>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/login">
                  <b>Log in</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/register">
                  <b>Register</b>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

