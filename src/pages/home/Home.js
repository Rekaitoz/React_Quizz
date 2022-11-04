import React from "react";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";
import "./component/home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="space">
        <h1 className="text-center">Welcome To Quizz</h1>
        <p className="px-5 mb-5">
          in this application you can do quizzes made by other users and can
          also make quizzes so that they can be done by your friends or other
          users
        </p>
        <div className="d-flex justify-content-evenly my-4">
          <Link to="/createquiz">
            <button type="button" class="btn btn-outline-primary">
              Create A Quiz
            </button>
          </Link>
          <Link to="listquiz">
            <button type="button" class="btn btn-outline-primary">
              Do A Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
