import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setstep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const prevHandler = () => {
    if (step > 1) setstep(step - 1);
  };
  const nextHandler = () => {
    if (step < 3) setstep(step + 1);
  };
  const toggleHander = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="close" onClick={toggleHander}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor={"orange"} textColor={"fff"} onClick={prevHandler}>
              {" "}
              <span>👈</span> Previous
            </Button>
            <Button
              bgColor={"deepskyblue"}
              textColor={"fff"}
              onClick={nextHandler}>
              {" "}
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
