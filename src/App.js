import React from "react";

// Pages
import AboutUs from "./pages/AboutUs";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Components
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
