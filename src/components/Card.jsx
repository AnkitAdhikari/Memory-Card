import "../styles/card.css";
export default function Card({ pokemonName, imgUrl }) {
  return (
    <div className='card'>
      <div className='poke-img'>
        <img
          className='pokemon-img'
          src={imgUrl}
          alt={pokemonName + " photo"}
        />
      </div>
      <p className='poke-name'>{pokemonName}</p>
    </div>
  );
}
