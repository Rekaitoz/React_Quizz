import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { GET_REGISTER_USER } from "../../appolo/MyQuery";
import { POST_REGISTER_USER } from "../../appolo/MyQuery";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useNavigate, Link } from "react-router-dom";
import NavTitle from "../nav/NavTitle";
import "./component/register.css";

export default function Register() {
  const [verifikasi, { data, loading, error }] =
    useLazyQuery(GET_REGISTER_USER);
  const [insertUser] = useMutation(POST_REGISTER_USER);
  const [usernameR, setUserName] = useState();
  const [passwordR, setPassword] = useState();
  const [cofPasswordR, setCofPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function cek() {
      console.log(usernameR, " ", passwordR);
      console.log(data?.user);
      if (passwordR != cofPasswordR) {
        alert("Password yang dimasukkan tidak sesuai dengan yang sebelumnya");
      } else {
        if (!data?.user[0]) {
          // Random Token
          const rand = () => Math.random(0).toString(36).substr(2);
          const tokenR = (length) =>
            (rand() + rand() + rand() + rand()).substr(0, length);
          // Masukkan Username, password, dan generate Token ke dalam APIHasura
          insertUser({
            variables: {
              username: usernameR,
              password: passwordR,
              token: tokenR(20),
            },
          });
          Swal.fire(
            "Create New Accout Succes!",
            "Your Account has Already Created, Now You can Login!",
            "success"
          );
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username already exists, please enter another username",
          });
        }
      }
    }
    if (data) {
      cek();
    }
  }, [data]);

  if (error) {
    console.log(error);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    verifikasi({
      variables: {
        username: usernameR,
      },
    });
  };

  return (
    <div className="register">
      <NavTitle></NavTitle>
      <div className="space">
        <h1 className="text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <p>New Username</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="New Username..."
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
              onChange={(e) => setPassword(e.target.value)}
              aria-label="password"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <p>Confirm Password</p>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password..."
              onChange={(e) => setCofPassword(e.target.value)}
              aria-label="confirmPassword"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="tombol">
            <center>
              <button className="btn btn-outline-primary" type="submit">
                Make New Account
              </button>
            </center>
          </div>
        </form>
        <div className="text-center">
          <p>
            Already Have Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
