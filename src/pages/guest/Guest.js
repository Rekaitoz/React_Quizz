import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addTokenGuest } from "../../store/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavTitle from "../nav/NavTitle";
import "./component/guest.css";

export default function Guest() {
  const dispatch = useDispatch();
  const [userGuest, setUserGuest] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Memasukkan nama Guest ke token
    dispatch(addTokenGuest(userGuest));
    Swal.fire("Login Succes!", "Welcome To Quizz!", "success");
    navigate("/");
  };

  return (
    <div className="guest">
      <NavTitle></NavTitle>
      <div className="space">
        <h1 className="text-center">Login As Guest</h1>
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name..."
              onChange={(e) => setUserGuest(e.target.value)}
              aria-label="Guest"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="tombol">
            <center>
              <button type="submit" className="btn btn-outline-primary">
                Enter
              </button>
            </center>
          </div>
        </form>
        <div>
          <p className="text-center">
            Already Have Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
