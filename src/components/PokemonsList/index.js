import React, {memo} from 'react';
import Pokemon from "../Pokemon";

const PokemonsList = ({ searchValue, pokemons }) => {
    return (
        <div className="pokemons-list">
            {pokemons.map(pokemon => (
                <Pokemon name={pokemon.name} searchValue={searchValue} key={pokemon.name} />
            ))}
        </div>
    );
};

export default memo(PokemonsList);
