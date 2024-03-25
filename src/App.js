import CardContianer from "./CardContianer";
import Button from "./Button";
import Counter from "./Counter";
import { useEffect, useState } from "react";
function App() {
  const [usedCards, setUsedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [count, setCount] = useState(0);

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
    console.log(randomIndex);
    setUsedCards([...usedCards, randomIndex]);
    setCount((prev) => prev + 1);
    setCurrentCard(randomIndex);
  };

  return (
    <div className="App">
      <CardContianer currentCard={currentCard} />
      <Button onClick={drawCard} />
      <Counter count={count} />
    </div>
  );
}

export default App;
