import React from 'react';
import { render } from "react-dom";
import { Tabs, Tab } from "./lib";

const App = () => (
  <div>
    <Tabs backgroundColor="#ccc" borderColor="blue">
      <Tab title="first title">Helloooo This is the first Tab.</Tab>
      <Tab title="second title" active="true">This is the second tab!!!</Tab>
      <Tab title="third title">Also this is the third tab that going to be displayed! ha ha!!</Tab>
    </Tabs>
  </div>
);

render(<App />, document.getElementById("root"));