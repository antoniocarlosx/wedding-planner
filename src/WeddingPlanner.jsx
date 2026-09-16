import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WeddingPlanner.css";
import TotalCost from "./TotalCost";
import NumberOfGuests from "./NumberOfGuests";
import ItemsDisplay from "./ItemsDisplay";
import { incrementDecorQuantity, decrementDecorQuantity } from "./decorSlice";
import { incrementSoundQuantity, decrementSoundQuantity } from "./soundSlice";
import { toggleCateringSelection } from "./cateringSlice";
import { toggleCoupleExperienceSelection } from "./coupleExperienceSlice";

const WeddingPlanner = () => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();
  const decorItems = useSelector((state) => state.decor);
  const soundItems = useSelector((state) => state.sound);
  const cateringItems = useSelector((state) => state.catering);
  const coupleExperienceItems = useSelector((state) => state.coupleExperience);

  const [numeroDeConvidados, setNumeroDeConvidados] = useState(5);

  const handleRemoveDecorFromCart = (index) => {
    dispatch(decrementDecorQuantity(index));
  };

  const handleAddDecorToCart = (index) => {
    dispatch(incrementDecorQuantity(index));
  };

  const handleRemoveSoundFromCart = (index) => {
    dispatch(decrementSoundQuantity(index));
  };

  const handleAddSoundToCart = (index) => {
    dispatch(incrementSoundQuantity(index));
  };

  const handleCateringSelection = (index) => {
    dispatch(toggleCateringSelection(index));
  };

  const handleCoupleExperienceSelection = (index) => {
    dispatch(toggleCoupleExperienceSelection(index));
  };

  const getSelectedItems = () => {
    const items = [];

    decorItems.forEach((item) => {
      if (item.quantity > 0) {
        items.push({ ...item, category: "decor" });
      }
    });

    soundItems.forEach((item) => {
      if (item.quantity > 0) {
        items.push({ ...item, category: "sound" });
      }
    });

    cateringItems.forEach((item) => {
      if (item.selected) {
        items.push({ ...item, category: "catering" });
      }
    });

    coupleExperienceItems.forEach((item) => {
      if (item.selected) {
        items.push({ ...item, category: "coupleExperience" });
      }
    });

    return items;
  };

  const itemsList = getSelectedItems();

  const calculateTotalCost = (section) => {
    let totalCost = 0;

    if (section === "decor") {
      decorItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }

    if (section === "sound") {
      soundItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }

    if (section === "catering") {
      cateringItems.forEach((item) => {
        if (item.selected) {
          totalCost += item.cost * numeroDeConvidados;
        }
      });
    }

    if (section === "coupleExperience") {
      coupleExperienceItems.forEach((item) => {
        if (item.selected) {
          totalCost += item.cost;
        }
      });
    }

    return totalCost;
  };

  const decorTotalCost = calculateTotalCost("decor");

  const soundTotalCost = calculateTotalCost("sound");

  const cateringTotalCost = calculateTotalCost("catering");

  const coupleExperienceTotalCost = calculateTotalCost("coupleExperience");

  const totalCost = {
    venue: 0,
    decor: decorTotalCost,
    sound: soundTotalCost,
    catering: cateringTotalCost,
    coupleExperience: coupleExperienceTotalCost,
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

            <section
              className="section-container  catering_container"
              id="catering"
            >
              <h2>Gastronomia & Recepção</h2>
              <p>O que teria para comer?</p>
              <span className="catering-explain">
                O valor total irá variar de acordo com o número de convidados
                escolhido acima!
              </span>

              <div className="catering_selection">
                {cateringItems.map((item, index) => (
                  <div className="catering_main" key={index}>
                    <div className="catering-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="catering-items-description">
                      <div className="catering-title">{item.name}</div>
                      <div className="catering-description">
                        {item.description}
                      </div>
                      <div className="bottom-line">
                        <div className="catering-pricing">
                          <div className="catering-cost">R${item.cost},00</div>
                          <span className="catering-span">
                            <em>por pessoa</em>
                          </span>
                        </div>
                        <input
                          className="catering-checkbox"
                          type="checkbox"
                          id={`catering_${index}`}
                          checked={item.selected}
                          onChange={() => handleCateringSelection(index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total_cost">
                <p>Custo Parcial:</p>
                <div className="catering-partial-cost">
                  <span className="amount_total">
                    R$ {cateringTotalCost},00
                  </span>
                  <span className="number-of-guests">
                    <em>
                      para <strong>{numeroDeConvidados}</strong> convidados
                    </em>
                  </span>
                </div>
              </div>
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

            <section className="section-container sound_container" id="sound">
              <h2>Som & Cerimônia</h2>
              <p>Como seria a sonorização?</p>

              <div className="sound_selection">
                {soundItems.map((item, index) => (
                  <div className="sound_main" key={index}>
                    <div className="sound_img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="text">{item.name}</div>
                    <div className="cost">R$ {item.cost},00</div>
                    <div className="button_container">
                      <button
                        className={
                          soundItems[index].quantity === 0
                            ? "btn-warning btn-disabled"
                            : "btn-minus btn-warning"
                        }
                        onClick={() => handleRemoveSoundFromCart(index)}
                      >
                        {" "}
                        &#8211;
                      </button>

                      <span className="selected-count">
                        {soundItems[index].quantity > 0
                          ? `${soundItems[index].quantity}`
                          : 0}
                      </span>

                      <button
                        className="btn-success btn-plus"
                        onClick={() => handleAddSoundToCart(index)}
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
                <span className="amount_total">R$ {soundTotalCost},00</span>
              </div>
            </section>

            <section
              className="section-container coupleExperience_container"
              id="coupleExperience"
            >
              <h2>Experiência dos Noivos</h2>
              <p>Quais experiências você quer ter com seu noivo?</p>

              <div className="coupleExperience_selection">
                {coupleExperienceItems.map((item, index) => (
                  <div className="coupleExperience_main" key={index}>
                    <div className="coupleExperience-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="coupleExperience-items-description">
                      <div className="coupleExperience-title">{item.name}</div>
                      <div className="coupleExperience-description">
                        {item.description}
                      </div>
                      <div className="bottom-line">
                        <div className="coupleExperience-pricing">
                          <div className="coupleExperience-cost">
                            R${item.cost},00
                          </div>
                        </div>
                        <input
                          className="coupleExperience-checkbox"
                          type="checkbox"
                          id={`coupleExperience_${index}`}
                          checked={item.selected}
                          onChange={() =>
                            handleCoupleExperienceSelection(index)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total_cost">
                <p>Custo Parcial:</p>
                <div className="coupleExperience-partial-cost">
                  <span className="amount_total">
                    R$ {coupleExperienceTotalCost},00
                  </span>
                </div>
              </div>
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
