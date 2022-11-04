import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListQuizItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, path, quiz_name, username, index } = props;

  const navigate = useNavigate();

  const doQuiz = (pathx) => {
    navigate("/doquiz/" + pathx);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{quiz_name}</td>
      <td>{username}</td>
      <td className="removeBorder" onClick={() => doQuiz(path)}>
        <i class="bi bi-pencil-square"> Do Quiz</i>
      </td>
    </tr>
  );
};

export default ListQuizItem;
