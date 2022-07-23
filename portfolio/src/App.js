import React from "react";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import "./styles/style.css";

const App = () => {
  return (
    <div>
      <div className="body">
        <Header />
        <PortfolioContainer />
      </div>

      <Footer />
    </div>
  );
};
export default App;
