const DoQuizItem = (props) => {
  const {
    pertanyaan,
    jawaban,
    jawab_1,
    jawab_2,
    jawab_3,
    jawab_4,
    correction,
  } = props;
  const next = (answer) => {
    return answer == jawaban ? correction(true) : correction(false);
  };
  return (
    <div className="questionQuiz">
      <p className="mb-5">{pertanyaan}</p>
      <div className="row">
        <div className="col-6">
          <span onClick={() => next(1)}>
            <button>{jawab_1}</button>
          </span>
        </div>
        <div className="col-6">
          <span onClick={() => next(2)}>
            <button>{jawab_2}</button>
          </span>
        </div>
        <div className="col-6">
          <span onClick={() => next(3)}>
            <button>{jawab_3}</button>
          </span>
        </div>
        <div className="col-6">
          <span onClick={() => next(4)}>
            <button>{jawab_4}</button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default DoQuizItem;
