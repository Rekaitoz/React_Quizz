import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GET_QUESTION_QUIZ, INSERT_QUESTION } from "../../appolo/MyQuery";
import { useMutation, useSubscription } from "@apollo/client";
import AddQuestion from "./component/AddQuestion";
import QuestionItem from "./component/QuestionItem";
import NotFound from "../notfound/NotFound";
import Navbar from "../nav/Navbar";
import Loadingsvg from "../loading/Loadingsvg";
import "./component/editquiz.css";

const EditQuiz = () => {
  const { path } = useParams();
  const { data, loading, error } = useSubscription(GET_QUESTION_QUIZ, {
    variables: { path: path },
  });
  const [insertQuestion] = useMutation(INSERT_QUESTION);
  const [isOpen, setIsOpen] = useState(false);

  const tokenId = useSelector((state) => state.token.id);

  if (loading) {
    // Add Loading
    return <Loadingsvg></Loadingsvg>;
  }
  if (tokenId != data?.quiz[0].user_id) {
    return <NotFound></NotFound>;
  }
  const addNewQuestion = (pertanyaanR, jaw1, jaw2, jaw3, jaw4, jawabanR) => {
    insertQuestion({
      variables: {
        jawab_1: jaw1,
        jawab_2: jaw2,
        jawab_3: jaw3,
        jawab_4: jaw4,
        jawaban: jawabanR,
        pertanyaan: pertanyaanR,
        quiz_id: data?.quiz[0].id,
      },
    });
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const check = () => {
    if (!data?.quiz[0].questions[0]) {
      return (
        <p style={{ color: "black", marginTop: "10px", fontSize: "20px" }}>
          <center> No Question ever made!</center>
        </p>
      );
    }
  };

  return (
    <div className="editquiz">
      <Navbar />
      <div className="space cquiz">
        <h1 className="text-center">Edit Quiz</h1>
        <div className="addNewQuiz">
          <label>Add New Question</label>
          <i class="bi bi-plus-circle" onClick={togglePopup}></i>
        </div>
        {isOpen && (
          <AddQuestion
            addNewQuestion={addNewQuestion}
            handleClose={togglePopup}
          />
        )}

        <table style={{ margin: "auto" }}>
          <thead>
            <td>No</td>
            <td>Question</td>
            <td>First choice</td>
            <td>Second choice</td>
            <td>Third choice</td>
            <td>Fourth choice</td>
            <td></td>
            <td></td>
          </thead>
          {data?.quiz[0].questions.map((item, index) => (
            <QuestionItem
              key={item.id}
              index={index}
              id={item.id}
              pertanyaan={item.pertanyaan}
              jawab_1={item.jawab_1}
              jawab_2={item.jawab_2}
              jawab_3={item.jawab_3}
              jawab_4={item.jawab_4}
              jawaban={item.jawaban}
            />
          ))}
        </table>
        {check()}
      </div>
    </div>
  );
};

export default EditQuiz;
