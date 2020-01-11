import React, {memo} from 'react';
import Pokemon from "../Pokemon";

let pokemons;
let pokemonsPromise = fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then(response => response.json()).then(data => pokemons = data.results);

const PokemonsList = ({ searchValue }) => {
    if (!pokemons){
        throw pokemonsPromise
    }
    // const [pokemons, setPokemons] = useState([]);
    // const getPokemons = useCallback(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then(response => response.json()).then(data => {
    //         setPokemons(data.results)
    //     })
    // }, [setPokemons]);

    // useEffect(() => {
    //     getPokemons();
    // }, [getPokemons]);
    return (
        <div className="pokemons-list">
            {pokemons.map(pokemon => (
                <Pokemon name={pokemon.name} searchValue={searchValue} key={pokemon.name} />
            ))}
        </div>
    );
};

export default memo(PokemonsList);
