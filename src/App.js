import React, {useEffect, useState, useCallback, useDeferredValue} from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import {sendAnalyticsPing} from './helpers/utils';
import Description from './components/Description';
import Header from './components/Header';
import {
    unstable_IdlePriority,
    unstable_runWithPriority,
    unstable_scheduleCallback
} from "scheduler";
import Spinner from './components/Spinner';
const PokemonsList = React.lazy(() => import ('./components/PokemonsList'))

function App() {
    const [inputValue, setInputValue] = useState('');

    const deferredInputValue = useDeferredValue(inputValue, {
        timeoutMs: 3000
    });

    const onInputChange = (value) => {
        setInputValue(value);

        unstable_scheduleCallback(unstable_IdlePriority, function () {
            sendAnalyticsPing(value);
        });
    };

    return (
        <div className="App">
            <Header>Pokémons</Header>
            <SearchBox inputValue={inputValue} onChange={onInputChange}/>
            <React.Suspense fallback={<Spinner/>}>
                <PokemonsList searchValue={deferredInputValue}/>
            </React.Suspense>
            <Description/>
        </div>
    );
}

export default App;
