import React, { useState, useDeferredValue } from "react";
import "./App.css";
import PokemonsList from "./components/PokemonsList";
import SearchBox from "./components/SearchBox";
import { sendAnalyticsPing } from "./helpers/utils";
import Description from "./components/Description";
import Header from "./components/Header";
import {
  unstable_IdlePriority,
  unstable_runWithPriority,
  unstable_scheduleCallback,
} from "scheduler";

function App() {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (value) => {
    setInputValue(value);
    sendAnalyticsPing(value);
  };

  return (
    <div className="App">
      <Header>Pokédex</Header>
      <SearchBox inputValue={inputValue} onChange={onInputChange} />
      <PokemonsList searchValue={inputValue} />
      <Description />
    </div>
  );
}

export default App;
