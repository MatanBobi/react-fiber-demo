import React, { memo, useCallback, useEffect, useState } from 'react'
import Pokemon from '../Pokemon'
import Spinner from '../Spinner'

const PokemonsList = ({ searchValue }) => {
  const [pokemons, setPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const getPokemons = useCallback(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then(response => response.json()).then(data => {
      setPokemons(data.results)
      setIsFetching(false)
    })
  }, [setPokemons, setIsFetching])

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  return isFetching ? <Spinner/> : (
    <div className="pokemons-list">
      {
        pokemons.map(pokemon => (
          <Pokemon name={pokemon.name} searchValue={searchValue} key={pokemon.name}/>
        ))
      }
    </div>
  )
}

export default memo(PokemonsList)
