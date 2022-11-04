import { useState, useEffect } from "react";
import {
  GET_QUESTION_BY_ID,
  UPDATE_QUESTION_BY_ID,
} from "../../../appolo/MyQuery";
import { useMutation, useQuery } from "@apollo/client";

const UpdateQuestion = (props) => {
  const { data, error, loading } = useQuery(GET_QUESTION_BY_ID, {
    variables: { id: props.id },
  });
  const [updateQuestion] = useMutation(UPDATE_QUESTION_BY_ID);
  const [state, setState] = useState({
    question: "",
    jaw1: "",
    jaw2: "",
    jaw3: "",
    jaw4: "",
    jawaban: "",
  });

  useEffect(() => {
    async function cek() {
      setState({
        question: data?.question[0].pertanyaan,
        jaw1: data?.question[0].jawab_1,
        jaw2: data?.question[0].jawab_2,
        jaw3: data?.question[0].jawab_3,
        jaw4: data?.question[0].jawab_4,
        jawaban: data?.question[0].jawaban,
      });
    }
    if (data) {
      cek();
    }
  }, [data]);

  const handleSubmit = () => {
    updateQuestion({
      variables: {
        id: props.id,
        pertanyaan: state.question,
        jawab_1: state.jaw1,
        jawab_2: state.jaw2,
        jawab_3: state.jaw3,
        jawab_4: state.jaw4,
        jawaban: state.jawaban,
      },
    });
    props.handleClose();
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="popup-box" style={{ color: "black" }}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h1>Update Question</h1>
        <div onSubmit={handleSubmit}>
          <p>Question</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Question..."
              onChange={onChange}
              value={state.question}
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
              value={state.jaw1}
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
              value={state.jaw2}
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
              value={state.jaw3}
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
              value={state.jaw4}
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
          >
            <option value="1" selected>
              First Choice
            </option>
            <option value="2">Second Choice</option>
            <option value="3">Third Choice</option>
            <option value="4">Fourth Choice</option>
          </select>

          <button
            onClick={handleSubmit}
            className="btn btn-outline-primary mt-3"
          >
            Update Question
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpdateQuestion;
