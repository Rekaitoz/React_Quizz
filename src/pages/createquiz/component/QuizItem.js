import { DELETE_QUIZ } from "../../../appolo/MyQuery";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const QuizItem = (props) => {
  const [deleteItem] = useMutation(DELETE_QUIZ);
  const navigate = useNavigate();
  const deleteQuiz = (idx) => {
    deleteItem({
      variables: {
        id: idx,
      },
    });
    // navigate("/createquiz");
  };

  const editQuiz = () => {
    navigate("/editquiz/" + props.path);
  };
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.quiz_name}</td>
      <td> /{props.path}</td>
      <td className="removeBorder" onClick={() => deleteQuiz(props.id)}>
        <i class="bi bi-trash3-fill"></i>
      </td>
      <td className="removeBorder" onClick={() => editQuiz()}>
        <i class="bi bi-pencil"></i>
      </td>
    </tr>
  );
};

export default QuizItem;
