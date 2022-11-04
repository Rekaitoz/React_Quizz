import React from "react";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";
import "./component/notuser.css";

export default function NotUser() {
  return (
    <div className="notuser">
      <Navbar />
      <div className="space">
        <h1 className="text-center">Alert!!!</h1>
        <p className="px-5 mb-5">
          You cannot Create Quiz because your a guest, You must become a user
          first then u can make a quiz. Login to Became a User!!!
        </p>
        <div className="d-flex justify-content-evenly my-4">
          <Link to="/login">
            <button type="button" class="btn btn-outline-primary">
              Login
            </button>
          </Link>
          <Link to="/">
            <button type="button" class="btn btn-outline-primary">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
