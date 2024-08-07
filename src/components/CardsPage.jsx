import Card from "./Card";

export default function CardsPage({ pokeList }) {
  return (
    <>
      {pokeList.map((el) => {
        console.log(el);
        return (
          <div key={el.name}>
            <Card pokemonName={el.name} imgUrl={el.imgUrl} />
          </div>
        );
      })}
    </>
  );
}
