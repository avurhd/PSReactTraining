import React from "react";
import { Wrapper } from "./components/wrapper";
import "./styles/index.scss";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Wrapper />
      </header>
    </div>
  );
};

export default App;
