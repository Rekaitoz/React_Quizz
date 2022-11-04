import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { GET_DOQUESTION } from "../../appolo/MyQuery";
import DoQuizItem from "./component/DoQuizItem";
import NavTitle from "../nav/NavTitle";
import "./component/doquiz.css";
import Loadingsvg from "../loading/Loadingsvg";

const DoQuiz = () => {
  const { path } = useParams();
  const { data, loading, error } = useQuery(GET_DOQUESTION, {
    variables: { path: path },
  });

  const [loadingx, setLoadingx] = useState(false);
  const [loadingy, setLoadingy] = useState(false);
  const [result, setResult] = useState(0);
  const [go, setGo] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const check = () => {
      if (data?.quiz[0].questions.length - 1 > go) {
        setGo(go + 1);
        setLoadingx(false);
      } else {
        setResult((100 / data?.quiz[0].questions.length) * score);
        setLoadingy(true);
      }
    };
    if (loadingx) {
      check();
    }
  }, [loadingx]);

  useEffect(() => {
    const check = () => {
      Swal.fire("Good job!", "Your Score is : " + result, "success");
      navigate("/listquiz");
    };
    if (loadingy) {
      check();
    }
  }, [loadingy]);

  if (loading) {
    return <Loadingsvg></Loadingsvg>;
  }
  if (!data?.quiz[0].questions[0]) {
    {
      Swal.fire("Error", "There No Questions Here!", "error");
    }
    navigate("/listquiz");
    return null;
  }

  const correction = (answer) => {
    console.log(answer);
    answer ? setScore(score + 1) : setScore(score);
    setLoadingx(true);
  };

  const noRightNow = () => {
    return `Question No.${go + 1} of ${data?.quiz[0].questions.length}`;
  };

  return (
    <div className="doquiz">
      <NavTitle></NavTitle>
      <div className="space cquiz">
        <h5 className="mb-3">{noRightNow()}</h5>
        <h1 className="text-center mb-5">Answer The Question</h1>
        <div>
          {
            <DoQuizItem
              correction={correction}
              pertanyaan={data?.quiz[0].questions[go].pertanyaan}
              jawaban={data?.quiz[0].questions[go].jawaban}
              jawab_1={data?.quiz[0].questions[go].jawab_1}
              jawab_2={data?.quiz[0].questions[go].jawab_2}
              jawab_3={data?.quiz[0].questions[go].jawab_3}
              jawab_4={data?.quiz[0].questions[go].jawab_4}
            ></DoQuizItem>
          }
        </div>
      </div>
    </div>
  );
};

export default DoQuiz;
