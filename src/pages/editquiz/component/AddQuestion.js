import Swal from "sweetalert2";
import { useState } from "react";

const AddQuestion = (props) => {
  const [state, setState] = useState({
    question: "",
    jaw1: "",
    jaw2: "",
    jaw3: "",
    jaw4: "",
    jawaban: "",
  });

  const handleSubmit = (e) => {
    if (
      state.question == "" ||
      state.jaw1 == "" ||
      state.jaw2 == "" ||
      state.jaw3 == "" ||
      state.jaw4 == "" ||
      state.jawaban == ""
    ) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill Out the field and Choose the Answer!",
      });
    } else {
      props.addNewQuestion(
        state.question,
        state.jaw1,
        state.jaw2,
        state.jaw3,
        state.jaw4,
        state.jawaban
      );
      props.handleClose();
    }
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h1>Add New Question</h1>
        <form onSubmit={handleSubmit}>
          <p>Question</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Question..."
              onChange={onChange}
              aria-label="question"
              name="question"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>First Choice</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="First Choice.."
              onChange={onChange}
              aria-label="jaw1"
              name="jaw1"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>Second Choice</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Second Choice..."
              onChange={onChange}
              aria-label="jaw2"
              name="jaw2"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>Third Choice</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Third Choice..."
              onChange={onChange}
              aria-label="jaw3"
              name="jaw3"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>Fourth Choice</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Fourth Choice..."
              onChange={onChange}
              aria-label="jaw4"
              name="jaw4"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>The Correct Answer</p>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            name="jawaban"
            required
          >
            <option selected hidden disabled>
              The Answer
            </option>
            <option value="1">First Choice</option>
            <option value="2">Second Choice</option>
            <option value="3">Third Choice</option>
            <option value="4">Fourth Choice</option>
          </select>

          <button type="submit" className="btn btn-outline-primary mt-3">
            Add Question
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddQuestion;
