import React from "react";
import { Route } from "react-router-dom";

//components nad pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";

import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Nav />
        <Home />
      </Route>
    </div>
  );
}

export default App;
