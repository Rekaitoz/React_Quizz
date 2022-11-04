import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addTokenUser } from "../../store/auth";
import { useNavigate, Link } from "react-router-dom";
import { GET_LOGIN_USER } from "../../appolo/MyQuery";
import { useLazyQuery } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./component/login.css";
import NavTitle from "../nav/NavTitle";
import Loadingsvg from "../loading/Loadingsvg";

export default function Login() {
  const [verifikasi, { data, loading, error }] = useLazyQuery(GET_LOGIN_USER);
  const dispatch = useDispatch();
  const [usernameR, setUserName] = useState("");
  const [passwordR, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function cek() {
      if (data?.user[0]) {
        // Jika Benar, Mengambil Token yang dimiliki user dan menyimpannya di local storage
        console.log("success");
        {
          data?.user.map((item) => dispatch(addTokenUser(item)));
        }
        Swal.fire("Login Succes!", "Welcome To Quizz!", "success");
        navigate("/");
      } else {
        console.log("notfound");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or Password cant be found!",
        });
      }
    }
    if (data) {
      cek();
    }
  }, [data]);

  if (error) {
    console.log(error);
    return null;
  }
  if (loading) {
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("success");
    // Mencari di APIHASURA apakah username ditemukan, dan Mencek apakah password benar
    verifikasi({
      variables: {
        username: usernameR,
        password: passwordR,
      },
    });
  };

  return (
    <div className="login">
      <NavTitle></NavTitle>
      <div className="space">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username..."
              name="username"
              onChange={(e) => setUserName(e.target.value)}
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>Password</p>

          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password..."
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              aria-label="password"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="tombol">
            <center>
              <button
                type="submit"
                className="btn btn-outline-primary"
                data-testid="enter"
              >
                Submit
              </button>
            </center>
          </div>
        </form>
        <div className="text-center">
          <p>
            Dont Have Account? <Link to="/register">Register</Link>
          </p>
        </div>
        <div className="text-center">
          <p>
            Join As <Link to="/guest">Guest</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
