import { useState } from "react";
import { useSelector } from "react-redux";
import { GET_QUIZ, INSERT_QUIZ } from "../../appolo/MyQuery";
import { useMutation, useSubscription } from "@apollo/client";
import QuizItem from "./component/QuizItem";
import AddQuiz from "./component/AddQuiz";
import NotFound from "../notfound/NotFound";
import Navbar from "../nav/Navbar";
import Loadingsvg from "../loading/Loadingsvg";

const CreateQuiz = () => {
  const tokenId = useSelector((state) => state.token.id);
  const accounts = useSelector((state) => state.token.account);
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useSubscription(GET_QUIZ, {
    variables: { id: tokenId },
  });
  const [insertQuiz] = useMutation(INSERT_QUIZ);
  if (accounts != "User") {
    return <NotFound></NotFound>;
  }
  if (error) {
    console.log(error);
  }
  if (loading) {
    return <Loadingsvg></Loadingsvg>;
  }

  const addNewQuiz = (nameR, pathR) => {
    insertQuiz({
      variables: {
        quiz_name: nameR,
        path: pathR,
        user_id: tokenId,
      },
    });
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const check = () => {
    if (!data?.user[0].quizzes) {
      return (
        <p style={{ color: "black", marginTop: "10px", fontSize: "20px" }}>
          <center> No Quiz ever made!</center>
        </p>
      );
    }
  };
  return (
    <div className="createquiz">
      <Navbar />
      <div className="space cquiz">
        <h1 className="text-center ">Create Your Own Quiz</h1>
        <div className="addNewQuiz">
          <label>Add New Quiz</label>
          <i class="bi bi-plus-circle" onClick={togglePopup}></i>
        </div>

        {isOpen && (
          <AddQuiz addNewQuiz={addNewQuiz} handleClose={togglePopup} />
        )}

        <table style={{ margin: "auto" }}>
          <thead>
            <td>No</td>
            <td>Quiz Name</td>
            <td>Quiz Link</td>
            <td></td>
            <td></td>
          </thead>

          {data?.user[0].quizzes.map((item, index) => (
            <QuizItem
              key={item.id}
              index={index}
              id={item.id}
              path={item.path}
              quiz_name={item.quiz_name}
            />
          ))}
        </table>
        {check()}
      </div>
    </div>
  );
};
export default CreateQuiz;
