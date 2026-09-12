import React from "react";
import "./TotalCost.css";

const TotalCost = ({ totalCost, ItemsDisplay }) => {
  const amount_total =
    totalCost.venue +
    totalCost.decor +
    totalCost.sound +
    totalCost.catering +
    totalCost.coupleExperience +
    totalCost.memories;

  return (
    <>
      <div className="pricing">
        <div className="display-box">
          <header>
            <h1>Custo Total por Evento:</h1>
          </header>
          <div className="total_amount">
            <h2>R$ {amount_total},00</h2>
          </div>
          <div className="render">
            <ItemsDisplay/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalCost;
