import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Works from "./Work";
import Featured from "./StudyCase";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header></Header>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/works" component={Works} />
      <Route path="/works/:project" component={Featured} />
      {/* let path = `${match.url}/relative-path`; */}
    </div>
  </BrowserRouter>
);

export default App;
