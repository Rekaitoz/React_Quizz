import { GET_QUIZ_PUBLIC } from "../../appolo/MyQuery";
import { useSubscription } from "@apollo/client";
import ListQuizItem from "./component/ListQuizItem";
import Navbar from "../nav/Navbar";
import "./component/listquiz.css";

const ListQuiz = () => {
  const { data, error, loading } = useSubscription(GET_QUIZ_PUBLIC);

  const check = () => {
    if (!data?.quiz[0]) {
      return (
        <p style={{ color: "black", marginTop: "10px", fontSize: "20px" }}>
          <center> No Quiz ever made!</center>
        </p>
      );
    }
  };
  return (
    <div className="listquiz">
      <Navbar />
      <div className="space cquiz">
        <h1 className="text-center mb-5">Choose Your Quiz</h1>
        <table style={{ margin: "auto" }}>
          <thead>
            <td>No</td>
            <td>Quiz Name</td>
            <td>Made By</td>
            <td></td>
          </thead>
          {data?.quiz.map((item, index) => (
            <ListQuizItem
              key={item.id}
              index={index}
              id={item.id}
              path={item.path}
              quiz_name={item.quiz_name}
              username={item.user.username}
            />
          ))}
        </table>
        {check()}
      </div>
    </div>
  );
};
export default ListQuiz;
