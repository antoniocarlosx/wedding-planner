import React, { useState } from "react";
import "./App.css";
import WeddingPlanner from "./WeddingPlanner";
import AboutUs from "./AboutUs";

function App() {
  const [showPlanner, setShowPlanner] = useState(false);

  const handleGetStarted = () => {
    setShowPlanner(true);
  };

  return (
    <>
      {!showPlanner && (
        <header className="first_page">
          
          <div className="main_planner">
            <h1 className="planner_heading">Planejador de Casamento Dinâmico</h1>
            <div className="first_page_name_btn">
              <h2 className="planner_sentence">
                {" "}
                Planeje o seu grande dia e controle os custos em tempo real
                conosco!
              </h2>
            </div>
            <div className="aboutus_main">
              <AboutUs />
            </div>
            <div className="getstarted_btn">
              <button
                onClick={() => handleGetStarted()}
                className="get-started-btn"
              >
                Comece Agora!
              </button>
            </div>
          </div>
        </header>
      )}

      {showPlanner && <WeddingPlanner />}
    </>
  );
}

export default App;
