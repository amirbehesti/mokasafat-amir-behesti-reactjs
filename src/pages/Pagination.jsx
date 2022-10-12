import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Pagination = ({ perPage, onPaginationChange, total }) => {
  const data = useSelector((state) => state);
  const { filterTerm } = data.products;
  const [counter, setCounter] = useState(1);
  const numberOfButtons = Math.ceil(total / perPage);
  useEffect(() => {
    const value = perPage * counter;
    onPaginationChange(value - perPage, value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  useEffect(()=>{
    onPaginationChange(0, perPage);
    setCounter(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filterTerm])

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="buttons">
      <button className="prev-next-btn" key="prev" onClick={() => onButtonClick("prev")}>
        Prev
      </button>

      {new Array(numberOfButtons).fill(null).map((el, index) => {
        return (
          <button
            className={`${index + 1 === counter ? "active" : "normal-btn"}`}
            onClick={() => setCounter(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        );
      })}
      <button className="prev-next-btn" key="next" onClick={() => onButtonClick("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
