import React, {useEffect, useState, useCallback, useDeferredValue} from 'react';
import './App.css';
import PokemonsList from "./components/PokemonsList";
import SearchBox from './components/SearchBox';
import {sendAnalyticsPing} from './helpers/utils';
import Description from './components/Description';
import Header from './components/Header';
import {
    unstable_IdlePriority,
    unstable_runWithPriority,
    unstable_scheduleCallback
} from "scheduler";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const deferredInputValue = useDeferredValue(inputValue, {
        timeoutMs: 5000
    });

    const getPokemons = useCallback(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then(response => response.json()).then(data => {
            setPokemons(data.results)
        })
    }, [setPokemons]);

    const onInputChange = (value) => {
        setInputValue(value);

        unstable_scheduleCallback(unstable_IdlePriority, function() {
            sendAnalyticsPing(value);
        });
    };

    useEffect(() => {
        getPokemons();
    }, [getPokemons]);

    return (
        <div className="App">
            <Header>Pokemons</Header>
            <SearchBox inputValue={inputValue} onChange={onInputChange}/>
            <PokemonsList pokemons={pokemons} searchValue={deferredInputValue}/>
            <Description/>
        </div>
    );
}

export default App;
