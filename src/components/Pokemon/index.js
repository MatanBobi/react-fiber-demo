import React, {useState, useEffect} from 'react';
import {miningBitcoin} from '../../helpers/utils';

const Pokemon = ({name, searchValue}) => {
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.json()).then(data => {
            setPokemonData(data);
        })
    }, [name]);

    miningBitcoin(1);

    const matchesFilterAtIndex = name.toLowerCase().indexOf(searchValue.toLowerCase());

    if (matchesFilterAtIndex >= 0 && searchValue !== "") {
        return (<div className='pokemon-wrapper'>
                {pokemonData.sprites &&
                <img src={pokemonData.sprites.front_default} alt=""/>
                }
                <div className="name">
                    {name.substring(0, matchesFilterAtIndex)}
                    <span className="highlight">
          {name.substring(
              matchesFilterAtIndex,
              matchesFilterAtIndex + searchValue.length
          )}
        </span>

                    {name.substring(matchesFilterAtIndex + searchValue.length)}
                </div>
            </div>
        );
    } else {
        return <div className='pokemon-wrapper'>
            {pokemonData.sprites &&
            <img src={pokemonData.sprites.front_default} alt=""/>
            }
            <div className="name">{name}</div>
        </div>;
    }
};

export default Pokemon;