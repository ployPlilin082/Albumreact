import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventService } from "../service/eventService";
import type { IAPIResponse } from "../service/eventService";

import { User } from "../Models/User";
import "./login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const eventService = new EventService();

  const [loginObj, setLoginObj] = useState({ ContactNo: "", Password: "" });
  const [userObj, setUserObj] = useState<User | null>(null);

 const onLogin = (e: React.FormEvent) => {
  e.preventDefault();

  console.log("ข้อมูลที่ใช้ล็อกอิน:", loginObj);

  const res: IAPIResponse<User> = eventService.loginUser(loginObj);
  console.log("ผลลัพธ์จาก loginUser:", res);

  if (res.code === "200") {
    alert("Login Success");

    localStorage.setItem("eventUser", JSON.stringify(res.data));
    setUserObj(res.data);

  
    window.dispatchEvent(new Event("auth-change"));

    navigate("/list");
    window.location.reload();
  } else {
    alert(res.message);
  }
};


  const logOff = () => {
    localStorage.removeItem("eventUser");
    setUserObj(null);
  };

  return (
    <div className="login-page p-3">
      <h1 className="mb-4 text-center">Log in</h1>

      <form onSubmit={onLogin}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter contact number or email"
            value={loginObj.ContactNo}
            onChange={(e) =>
              setLoginObj({ ...loginObj, ContactNo: e.target.value })
            }
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={loginObj.Password}
            onChange={(e) =>
              setLoginObj({ ...loginObj, Password: e.target.value })
            }
          />
        </div>

        {!userObj ? (
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={logOff}
          >
            LogOff
          </button>
        )}
      </form>

      <p className="text-center mt-3">
        Don't have an account?{" "}
        <a
          onClick={() => navigate("/register")}
          style={{ cursor: "pointer", color: "#d63384", fontWeight: 500 }}
        >
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
