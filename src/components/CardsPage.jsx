import "../styles/cardspage.css";
import Card from "./Card";

export default function CardsPage({ pokeList, handleClick }) {
  return (
    <div className='cards-container'>
      {pokeList.map((el) => {
        return (
          <Card
            key={el.name}
            handleClick={handleClick}
            pokemonName={el.name}
            imgUrl={el.imgUrl}
          />
        );
      })}
    </div>
  );
}
