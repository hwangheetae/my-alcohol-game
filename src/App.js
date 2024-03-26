import CardContianer from "./CardContianer";
import Button from "./Button";
import Counter from "./Counter";
import { useEffect, useState } from "react";
function App() {
  const [usedCards, setUsedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [count, setCount] = useState(0);
  const [restart, setRestart] = useState(false);
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (count === 52) {
      console.log("gameover");
    }
  });
  const totalCards = 52;

  const drawCard = () => {
    if (count === totalCards) return;
    let randomIndex = getRandomInt(1, totalCards);

    while (usedCards.includes(randomIndex)) {
      randomIndex = getRandomInt(1, totalCards);
    }

    setUsedCards([...usedCards, randomIndex]);
    setCount((prev) => prev + 1);
    setCurrentCard(randomIndex);
  };
  console.log(currentCard);
  const getRestart = () => {
    setRestart(true);
    setCount(0);
    setCurrentCard(0);
    setUsedCards([]);
  };
  return (
    <div className="App">
      <CardContianer currentCard={currentCard} />
      <Counter count={count} />
      <Button onClick={drawCard} value="다음" />
      <Button onClick={getRestart} value=" 다시하기" />
    </div>
  );
}

export default App;
