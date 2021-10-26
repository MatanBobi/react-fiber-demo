import React, { useState, startTransition } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import { sendAnalyticsPing } from "./helpers/utils";
import Description from "./components/Description";
import Header from "./components/Header";
import { unstable_IdlePriority, unstable_scheduleCallback } from "scheduler";
import Spinner from "./components/Spinner";
const PokemonsList = React.lazy(() => import("./components/PokemonsList"));

function App() {
  const [inputValue, setInputValue] = useState("");
  const [deferredValue, setDeferredValue] = useState("");

  const onInputChange = (value) => {
    setInputValue(value);
    startTransition(() => {
      setDeferredValue(value);
    });
    unstable_scheduleCallback(unstable_IdlePriority, function () {
      sendAnalyticsPing(value);
    });
  };

  return (
    <div className="App">
      <Header>Pokémons</Header>
      <SearchBox inputValue={inputValue} onChange={onInputChange} />
      <React.Suspense fallback={<Spinner />}>
        <PokemonsList searchValue={deferredValue} />
      </React.Suspense>
      <Description />
    </div>
  );
}

export default App;
