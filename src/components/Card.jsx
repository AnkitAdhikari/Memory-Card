export default function Card({ pokemonName, imgUrl }) {
  return (
    <div>
      <div className='poke-img'>
        <img src={imgUrl} alt={pokemonName + " photo"} />
      </div>
      <p className='poke-name'>{pokemonName}</p>
    </div>
  );
}
