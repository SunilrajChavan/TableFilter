import React from "react";

import { Header } from "../Header/Header";
import TableWithSeach from "../TableWithSearch/TableWithSearch"

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <TableWithSeach></TableWithSeach>
      </main>
    </div>
  );
};

export default App;
