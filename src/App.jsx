import "./App.css";
import CardsPage from "./components/CardsPage";
import getPokemonFormatted from "./services/fetchPoke";
const pokeList = await getPokemonFormatted();
function App() {
  return (
    <>
      <h1>Welcome to memory card game</h1>
      <CardsPage pokeList={pokeList} />
    </>
  );
}

export default App;
