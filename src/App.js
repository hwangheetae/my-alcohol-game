import CardContianer from "./CardContianer";
import Button from "./Button";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Description from "./Description";
import Title from "./Title";
import "./App.css";
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
    <div>
      <Title />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {gameEnd ? (
            <div className="text-xl font-bold text-red-500 h-96 flex items-center justify-center">
              게임 종료!
            </div>
          ) : (
            <>
              <CardContianer currentCard={currentCard} />
            </>
          )}
          <Counter count={count} />
          <div className="flex justify-center space-x-4 ">
            <Button onClick={getRestart} value=" 다시하기" />
            <Button onClick={handlePopupMessage} value="게임 방법" />
            <Button onClick={drawCard} value="다음" />
          </div>
          <ReactModal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            ariaHideApp={false}
            contentLabel="Description"
            shouldCloseOnOverlayClick={true}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md"
            overlayClassName="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"
          >
            <Description />
          </ReactModal>
        </div>
      </div>
    </div>
  );
}

export default App;
