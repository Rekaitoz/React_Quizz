import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavTitle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(deleteToken());
    navigate("/login");
  };

  const account = useSelector((state) => state.token.account);
  const usernameUser = useSelector((state) => state.token.username);
  const tokenGuest = useSelector((state) => state.token.tokens);
  const user = () => {
    if (account == "User") {
      return usernameUser;
    } else {
      return "Guest_" + tokenGuest;
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        style={{ backgroundColor: "#1b1c1d", height: "70px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1
              style={{
                color: "#2185D0",
                fontFamily: "Lato",
                fontSize: "38px",
                fontWeight: "600",
                paddingLeft: "10px",
              }}
            >
              Quizz
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end px-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/createquiz">
                Create Quiz
              </Link>
              <Link className="nav-link" to="/listquiz">
                Quiz List
              </Link>
              <a className="nav-link ms-5" style={{ color: "#fff" }}>
                <i class="bi bi-person-circle"></i>
                {user()}
              </a>
              <a
                className="nav-link"
                onClick={logOut}
                style={{ color: "#ed4949" }}
                href=""
              >
                <i class="bi bi-box-arrow-in-right"></i>
                Log Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavTitle;
