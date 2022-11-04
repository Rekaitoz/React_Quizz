import { useState } from "react";
import "./CreateQuiz.css";

const AddQuiz = (props) => {
  const [quizName, setQuizName] = useState("");
  // make new Path From Random Token
  const rand = () => Math.random(0).toString(36).substr(2);
  const tokenR = (length) =>
    (rand() + rand() + rand() + rand()).substr(0, length);
  const [path, setPath] = useState(tokenR(13));

  const handleSubmit = () => {
    props.addNewQuiz(quizName, path);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h1>Add New Quiz</h1>
        <form onSubmit={handleSubmit}>
          <p>Quiz Name</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Quiz Name"
              onChange={(e) => setQuizName(e.target.value)}
              aria-label="quiz_name"
              name="quiz_name"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>Path</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              aria-label="path"
              name="path"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>

          <button type="submit" className="btn btn-outline-primary mt-3">
            Add Quiz
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddQuiz;
