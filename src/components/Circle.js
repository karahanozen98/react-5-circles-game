import { useEffect, useState } from "react";
import styled from "styled-components";

function Circle({ question, initGame }) {
  const [color, setBackground] = useState("");

  useEffect(() => {
    setBackground("");
  }, [initGame]);
  const handleClick = () => {
    if (question.isAnswer) {
      setBackground("green");
      setTimeout(() => {
        if (initGame) initGame();
      }, 1000);
    } else {
      setBackground("red");
    }
  };
  return (
    <CircleWrapper
      id="app"
      style={{ background: color }}
      onClick={() => handleClick()}
    >
      <span>{question.value}</span>
    </CircleWrapper>
  );
}
export default Circle;
const CircleWrapper = styled.div`
  position: relative;
  margin: 5px 25px;
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;
  transition-property:opacity;
  transition: 0.3s ease-in-out;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  --webkit-user-select: none;
  cursor: pointer;

  span {
    font-size: 1.3rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  // if user is on desktop activate hover
  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: #fff;
      color: #000;
    }
  }
`;
