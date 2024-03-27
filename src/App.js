import CardContianer from "./CardContianer";
import Button from "./Button";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Description from "./Description";
import Title from "./Title";

function App() {
  const [usedCards, setUsedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [count, setCount] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const totalCards = 52;

  useEffect(() => {
    if (count === totalCards) {
      setGameEnd(true);
    }
  }, [count]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRestart = () => {
    setCount(0);
    setCurrentCard(0);
    setUsedCards([]);
    setGameEnd(false);
  };

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

  const handlePopupMessage = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <Title />
      <div>
        <body>
          {gameEnd ? (
            <div>게임 종료!</div>
          ) : (
            <>
              <CardContianer currentCard={currentCard} />
            </>
          )}
          <Counter count={count} />
          <Button onClick={drawCard} value="다음" />
          <Button onClick={getRestart} value=" 다시하기" />
          <Button onClick={handlePopupMessage} value="게임 방법" />
          <ReactModal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            ariaHideApp={false}
            contentLabel="Description"
            shouldCloseOnOverlayClick={true}
          >
            <Description />
          </ReactModal>
        </body>
      </div>
    </div>
  );
}

export default App;
