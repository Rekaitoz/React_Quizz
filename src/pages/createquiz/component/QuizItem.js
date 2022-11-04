import Swal from "sweetalert2";
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

  const newLink = () => {
    const locations = window.location.host;
    const link = locations + "/doquiz/" + props.path;
    navigator.clipboard.writeText(link);
    Swal.fire(
      "Copy To Clipboard Succes",
      "Link already saved at your Clipboard!",
      "success"
    );
  };
  const editQuiz = () => {
    navigate("/editquiz/" + props.path);
  };
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.quiz_name}</td>
      <td>
        <i onClick={() => newLink()} className="bi bi-clipboard2-fill"></i>/
        {props.path}
      </td>
      <td className="removeBorder" onClick={() => deleteQuiz(props.id)}>
        <i className="bi bi-trash3-fill"></i>
      </td>
      <td className="removeBorder" onClick={() => editQuiz()}>
        <i className="bi bi-pencil"></i>
      </td>
    </tr>
  );
};

export default QuizItem;
