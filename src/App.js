import logo from "./logo.svg";
import Game from "./components/Game";
import Menu from "./components/Menu";
import WithComponent from "./components/withComponent";
import styles from "./App.css";
import { useState } from "react";

function App() {
  const [index, changeIndex] = useState(0);
  const [difficulty, changeDifficulty] = useState(10);
  return (
    <div className="App">
      <div className="container">
        <WithComponent
          index={index}
          changeIndex={changeIndex}
          difficulty={difficulty}
          changeDifficulty={changeDifficulty}
        />
      </div>
    </div>
  );
}

export default App;
