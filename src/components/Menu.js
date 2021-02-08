import Cicle from "./Circle";
import styled from "styled-components";
import Circle from "./Circle";
import { useEffect, useState } from "react";
function Menu({ changeIndex, changeDifficulty }) {
  const [opacity, setOpacity] = useState();
  const [diff, setDiff] = useState("Easy");

  useEffect(() => {
    if (localStorage.getItem("session")) setOpacity(1);
    else setOpacity(0);
  }, []);

  const handleStart = () => {
    changeIndex(1);
    localStorage.setItem("session", "true");
  };

  return (
    <MenuWrapper>
      <div>
        <h1>5 Circles Game</h1>
        <h2>How to Play?</h2>
        <h3>Select the corrent choice within circles</h3>
      </div>
      <div className="circles">
        <span>
          <Circle question={{ value: "😥", isAnswer: false }} />
        </span>
        <span onClick={() => setOpacity(1)}>
          <Circle question={{ value: "😀", isAnswer: true }} />
        </span>
      </div>
      <h3 style={{ opacity: opacity }}>Perfect!, You are ready to Start</h3>
      <div>
        <button
          style={{ opacity: opacity, background: "green" }}
          onClick={() => {
            changeDifficulty(10);
            setDiff("Easy");
          }}
        >
          Easy
        </button>
        <button
          style={{ opacity: opacity, background: "orange" }}
          onClick={() => {
            changeDifficulty(100);
            setDiff("Normal");
          }}
        >
          Medium
        </button>
        <button
          style={{ opacity: opacity, background: "red" }}
          onClick={() => {
            changeDifficulty(1000);
            setDiff("Hard");
          }}
        >
          Hard
        </button>
        <h3>Difficulty: {diff}</h3>
      </div>
      <button style={{ opacity: opacity }} onClick={() => handleStart()}>
        Start
      </button>
    </MenuWrapper>
  );
}
export default Menu;

const MenuWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 85%;
  justify-content: space-around;
  .circles {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;
