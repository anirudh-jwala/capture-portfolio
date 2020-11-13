import React from "react";

// Pages
import AboutUs from "./pages/AboutUs";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
};

export default App;
