import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import styled from "styled-components";

function Game({ difficulty, changeIndex }) {
  const [questions, setQuestions] = useState(null);
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

  const randomNumber = (size) => Math.round(Math.random() * size);
  const searchArray = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value === key) return true;
    }
    return false;
  };

  const initGame = () => {
    let arr = [];
    const num1 = randomNumber(difficulty / 2);
    const num2 = randomNumber(difficulty / 2);
    setFirstNumber(num1);
    setSecondNumber(num2);
    const sum = num1 + num2;
    for (let i = 0; i < 4; i++) {
      const r = randomNumber(difficulty);
      if (r != sum && !searchArray(arr, r))
        arr.push({ id: i, value: r, isAnswer: false });
      else i--;
    }
    arr.push({ id: 4, value: sum, isAnswer: true });

    setQuestions(arr.sort((a, b) => a.value - b.value));
  };
  useEffect(() => {
    initGame();
  }, []);
  return (
    <GameWrapper>
      <div>
        <h2>Select the correct one</h2>
        <h2>{firstNumber + "+" + secondNumber}</h2>
      </div>
      <div className="circles">
        {questions &&
          questions.map((question) => {
            return (
              <Circle
                key={question.id}
                question={question}
                initGame={initGame}
              />
            );
          })}
      </div>
      <div>
        <button onClick={() => changeIndex(0)}>Back to Menu</button>
      </div>
    </GameWrapper>
  );
}
export default Game;

const GameWrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .circles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
