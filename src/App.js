import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="app-container">
      <main className="main-bg">
        <Home />
      </main>
      <Footer />
    </div>

  );
}
export default App;