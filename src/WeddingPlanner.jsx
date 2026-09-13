import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WeddingPlanner.css";
import TotalCost from "./TotalCost";
import NumberOfGuests from "./NumberOfGuests";
import ItemsDisplay from "./ItemsDisplay";
import { incrementDecorQuantity, decrementDecorQuantity } from "./decorSlice";

const WeddingPlanner = () => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();
  const decorItems = useSelector((state) => state.decor);

  /*
  const totalCost = {
    venue: 0,
    decor: 0,
    sound: 0,
    catering: 0,
    coupleExperience: 0,
    memories: 0,
  };
*/
  const getSelectedItems = () => {
    const items = [];

    decorItems.forEach((item) => {
      if (item.quantity > 0) {
        items.push({ ...item, category: "decor" });
      }
    });

    return items;
  };

  const itemsList = getSelectedItems();

  const [numeroDeConvidados, setNumeroDeConvidados] = useState(5);

  const handleRemoveDecorFromCart = (index) => {
    dispatch(decrementDecorQuantity(index));
  };

  const handleAddDecorToCart = (index) => {
    dispatch(incrementDecorQuantity(index));
  };

  const calculateTotalCost = (section) => {
    let totalCost = 0;

    if (section === "decor") {
      decorItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }

    return totalCost;
  };

  const decorTotalCost = calculateTotalCost("decor");

  const totalCost = {
    venue: 0,
    decor: decorTotalCost,
    sound: 0,
    catering: 0,
    coupleExperience: 0,
    memories: 0,
  };

  return (
    <>
      <header>
        <nav className="navbar_planner">
          <div className="nav-logo">WeddingPlanner</div>
          <div className="nav-left">
            <div className="nav-links">
              <a href="#venue" className="nav-link">
                Local
              </a>
              <a href="#decor" className="nav-link">
                Decoração
              </a>
              <a href="#sound" className="nav-link">
                Som & Cerimônia
              </a>
              <a href="#catering" className="nav-link">
                Gastronomia & Recepção
              </a>
              <a href="#coupleExperience" className="nav-link">
                Experiência dos Noivos
              </a>
              <a href="#memories" className="nav-link">
                Memórias
              </a>
            </div>
          </div>

          <div className="nav-right">
            <button
              className="details-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              Ver Detalhes
            </button>
          </div>
        </nav>
      </header>

      {showDetails && (
        <TotalCost
          totalCost={totalCost}
          ItemsDisplay={() => (
            <ItemsDisplay
              items={itemsList}
              numeroDeConvidados={numeroDeConvidados}
            />
          )}
        />
      )}
      <main className="main_container">
        {!showDetails ? (
          <div className="items-information">
            <section className="section-container" id="numberOfGuests">
              <h2>Para Quantos Convidados?</h2>
              <NumberOfGuests
                numeroDeConvidados={numeroDeConvidados}
                aoMudar={setNumeroDeConvidados}
              />
            </section>

            <section className="section-container " id="venue">
              <h2>Local & Cerimônia</h2>
              <p>Em qual local?</p>
            </section>

            <section className="section-container decor_container" id="decor">
              <h2>Decoração & Ambientação </h2>
              <p>Com que decoração?</p>

              <div className="decor_selection">
                {decorItems.map((item, index) => (
                  <div className="decor_main" key={index}>
                    <div className="decor-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="text">{item.name}</div>
                    <div className="cost">R$ {item.cost},00</div>
                    <div className="button_container">
                      <button
                        className={
                          decorItems[index].quantity === 0
                            ? "btn-warning btn-disabled"
                            : "btn-minus btn-warning"
                        }
                        onClick={() => handleRemoveDecorFromCart(index)}
                      >
                        {" "}
                        &#8211;
                      </button>

                      <span className="selected-count">
                        {decorItems[index].quantity > 0
                          ? `${decorItems[index].quantity}`
                          : 0}
                      </span>

                      <button
                        className="btn-success btn-plus"
                        onClick={() => handleAddDecorToCart(index)}
                      >
                        {" "}
                        &#43;
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="total_cost">
                <p>Custo Parcial:</p>
                <span className="amount_total">R$ {decorTotalCost},00</span>
              </div>
            </section>

            <section className="section-container" id="sound">
              <h2>Som & Cerimônia</h2>
              <p>Como seria a sonorização?</p>
            </section>

            <section className="section-container" id="catering">
              <h2>Gastronomia & Recepção</h2>
              <p>O que teria para comer?</p>
            </section>

            <section className="section-container" id="coupleExperience">
              <h2>Experiência dos Noivos</h2>
              <p>Quais experiências você quer ter com seu noivo?</p>
            </section>

            <section className="section-container" id="memories">
              <h2>Memórias</h2>
              <p>Como quer guardar essas memórias?</p>
            </section>
          </div>
        ) : (
          <div className="amount_details"></div>
        )}
      </main>
    </>
  );
};

export default WeddingPlanner;
