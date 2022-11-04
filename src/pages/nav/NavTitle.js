import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const NavTitle = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light"
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
          ></div>
        </div>
      </nav>
    </div>
  );
};
export default NavTitle;
