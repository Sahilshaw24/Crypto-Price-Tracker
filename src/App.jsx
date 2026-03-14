import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import CoinDetail from "./pages/CoinDetail.jsx";

const App = () => {
  return (
    <div>
      <Home />
      <CoinDetail />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
