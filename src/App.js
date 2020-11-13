import React from "react";

// Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Components
import Nav from "./components/Nav";

// Router
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" component={AboutUs} exact />
        <Route path="/work" component={OurWork} exact />
        <Route path="/work/:id" component={MovieDetail} />
        <Route path="/contact" component={ContactUs} exact />
      </Switch>
    </div>
  );
};

export default App;
