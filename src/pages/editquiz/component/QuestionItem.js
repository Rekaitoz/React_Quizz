import { useState } from "react";
import { DELETE_QUESTION } from "../../../appolo/MyQuery";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import UpdateQuestion from "./UpdateQuestion";

const QuestionItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, jawab_1, jawab_2, jawab_3, jawab_4, pertanyaan, jawaban, index } =
    props;
  const [deleteItem] = useMutation(DELETE_QUESTION);
  const navigate = useNavigate();

  const deleteQuestion = (idx) => {
    deleteItem({
      variables: {
        id: idx,
      },
    });
    // navigate("/createquiz");
  };

  const editQuestion = () => {
    togglePopup();
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <tr>
      {isOpen && <UpdateQuestion id={id} handleClose={togglePopup} />}
      <td>{index + 1}</td>
      <td>{pertanyaan}</td>

      <td style={1 == jawaban ? { color: "#00fff4" } : { color: "black" }}>
        {jawab_1}
      </td>
      <td style={2 == jawaban ? { color: "#00fff4" } : { color: "black" }}>
        {jawab_2}
      </td>
      <td style={3 == jawaban ? { color: "#00fff4" } : { color: "black" }}>
        {jawab_3}
      </td>
      <td style={4 == jawaban ? { color: "#00fff4" } : { color: "black" }}>
        {jawab_4}
      </td>

      <td className="removeBorder" onClick={() => deleteQuestion(id)}>
        <i class="bi bi-trash3-fill"></i>
      </td>
      <td className="removeBorder" onClick={() => editQuestion(id)}>
        <i class="bi bi-pencil"></i>
      </td>
    </tr>
  );
};

export default QuestionItem;
