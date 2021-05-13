import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Work from "./Work";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header></Header>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/works" component={Work} />
    </div>
  </BrowserRouter>
);

export default App;
