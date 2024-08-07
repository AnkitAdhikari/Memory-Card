import { useEffect, useState } from "react";
import "./App.css";
import CardsPage from "./components/CardsPage";
import getPokemonFormatted from "./services/fetchPoke";
const pokeList = await getPokemonFormatted();
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [lists, setLists] = useState(pokeList);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  function handleClick(name) {
    if (!clicked.includes(name)) {
      clicked.push(name);
      setScore(score + 1);
    } else {
      setClicked([]);
      setScore(0);
    }
    const suffledArray = lists.sort(() => Math.random() - 0.5);
    console.log(suffledArray);
    setLists(suffledArray);
  }

  async function newCardHandler() {
    setLists(await getPokemonFormatted());
    setScore(0);
    setHighScore(0);
  }

  return (
    <>
      <div className='heading'>
        <h1>Welcome to memory card game</h1>
        <div className='scores'>
          <button
            className='btn btn-new'
            type='button'
            onClick={newCardHandler}
          >
            New Cards
          </button>
          <div className='score'>score: {score}</div>
          <div className='high-score'>highscore: {highScore}</div>
        </div>
      </div>
      <CardsPage handleClick={handleClick} pokeList={lists} />
      <div className='footer'>
        icon author attribute
        <a target='_blank' href='https://icons8.com/icon/TYcqVDaDnqWb/pokeball'>
          pokemon
        </a>{" "}
        icon by{" "}
        <a target='_blank' href='https://icons8.com'>
          Icons8
        </a>
      </div>
    </>
  );
}

export default App;
