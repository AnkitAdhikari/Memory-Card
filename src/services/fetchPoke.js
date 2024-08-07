const URL = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=`

function randomOffSet() {
    return Math.floor(Math.random() * 637) + 1;
}

async function getPokemon() {
    const offset = randomOffSet();
    const response = await fetch(URL + offset);
    const { results } = await response.json();
    return results;
}

export default async function getPokemonFormatted() {
    const unFormatted = await getPokemon();
    let formatted = await Promise.all(unFormatted.map(async (el) => {
        let { url, name } = el;
        const result = await fetch(url);
        let { sprites: { other: { dream_world: { front_default: imgUrl } } } } = await result.json();
        return { imgUrl, name };
    }));
    return formatted;
}
