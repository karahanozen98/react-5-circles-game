import Game from "./Game";
import Menu from "./Menu";

function WithComponent({ index, changeIndex, difficulty, changeDifficulty }) {
  if (index == 0)
    return (
      <Menu changeIndex={changeIndex} changeDifficulty={changeDifficulty} />
    );
  else return <Game changeIndex={changeIndex} difficulty={difficulty}></Game>;
}
export default WithComponent;
