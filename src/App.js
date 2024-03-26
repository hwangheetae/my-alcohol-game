import CardContianer from "./CardContianer";
import Button from "./Button";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Description from "./Description";

function App() {
  const [usedCards, setUsedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [count, setCount] = useState(0);
  const [restart, setRestart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const totalCards = 52;

  useEffect(() => {
    if (count === 52) {
      setGameEnd(true);
    }
  }, [count]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRestart = () => {
    setRestart(true);
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

  const customModalStyles = {}; // 커스텀 모달 스타일을 추가할 수 있습니다.

  return (
    <div className="App">
      <header>
        <h1>
          술게임을 알게되었는데 어플이 앱스토어에만 있어서 만들게 된 술게임
        </h1>
      </header>
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
          {/* 모달 컴포넌트 */}
          <ReactModal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)} // onRequestClose에 함수 전달
            style={customModalStyles}
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
