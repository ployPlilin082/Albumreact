import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { User } from "../Models/User";
import { EventService } from "../service/eventService";

const Register: React.FC = () => {
  const [userObj, setUserObj] = useState<User>(new User());
  const navigate = useNavigate();
  const eventService = new EventService();

 const onRegister = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("User object ก่อนบันทึก:", userObj);
  const res = eventService.registerUser(userObj);
  if (res.code) {
    alert("Registration Success");
    navigate("/login");
  } else {
    alert(res.message);
  }
  console.log("Response จาก registerUser:", res);
};

  return (
    <div className="register-page p-3">
      <h1 className="mb-4 text-center">Register</h1>
      <form onSubmit={onRegister}>
        <div className="form-group mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={userObj.Email}
            onChange={(e) => setUserObj({ ...userObj, Email: e.target.value })}
          />
        </div>

        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={userObj.Name}
            onChange={(e) => setUserObj({ ...userObj, Name: e.target.value })}
          />
        </div>

        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Contact No."
            value={userObj.ContactNo}
            onChange={(e) => setUserObj({ ...userObj, ContactNo: e.target.value })}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={userObj.Password}
            onChange={(e) => setUserObj({ ...userObj, Password: e.target.value })}
          />
          <small className="text-muted text-end d-block">
            <a onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
              Already have an account?
            </a>
          </small>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

