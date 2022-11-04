import { Link } from "react-router-dom";
import style from "./component/NotFound.module.css";
function NotFound() {
  return (
    <div className={style.notFound}>
      <img src="https://cdn.dribbble.com/users/1121009/screenshots/11013944/media/55e62cf5e10123ae23a84c411b5d9b6d.jpg?compress=1&resize=400x300" />
      <h2>Oops! Something went wrong!</h2>
      <h4 style={{ padding: "50px" }}>
        <Link className={style.button} to="/">
          RETURN TO HOME
        </Link>
      </h4>
    </div>
  );
}
export default NotFound;
