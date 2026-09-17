import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WeddingPlanner.css";
import TotalCost from "./TotalCost";
import NumberOfGuests from "./NumberOfGuests";
import ItemsDisplay from "./ItemsDisplay";
import { NavBar } from "./NavBar";
import GoHomeBtn from "./GoHomeBtn";

import { incrementDecorQuantity, decrementDecorQuantity } from "./decorSlice";
import { incrementSoundQuantity, decrementSoundQuantity } from "./soundSlice";
import { toggleCateringSelection } from "./cateringSlice";
import { toggleCoupleExperienceSelection } from "./coupleExperienceSlice";
import { toggleMemoriesSelection } from "./memoriesSlice";
import { toggleVenueSelection, clearAllSelections } from "./venueSlice";

const WeddingPlanner = () => {
  const [showDetails, setShowDetails] = useState(false);

  const [numeroDeConvidados, setNumeroDeConvidados] = useState(5);

  const navLinks = [
    { label: "Local", href: "#venue" },
    { label: "Decoração", href: "#decor" },
    { label: "Som & Cerimônia", href: "#sound" },
    { label: "Gastronomia & Recepção", href: "#catering" },
    { label: "Experiência dos Noivos", href: "#coupleExperience" },
    { label: "Memórias", href: "#memories" },
  ];

  const dispatch = useDispatch();
  const decorItems = useSelector((state) => state.decor);
  const soundItems = useSelector((state) => state.sound);
  const cateringItems = useSelector((state) => state.catering);
  const coupleExperienceItems = useSelector((state) => state.coupleExperience);
  const memoriesItems = useSelector((state) => state.memories);
  const venueByCapacity = useSelector((state) => state.venue);

  useEffect(() => {
    dispatch(clearAllSelections());
  }, [numeroDeConvidados, dispatch]);

  const venueItems = venueByCapacity[numeroDeConvidados] || [];

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

  const handleMemoriesSelection = (index) => {
    dispatch(toggleMemoriesSelection(index));
  };

  const handleVenueSelection = (index) => {
    dispatch(toggleVenueSelection({ capacity: numeroDeConvidados, index }));
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

    memoriesItems.forEach((item) => {
      if (item.selected) {
        items.push({ ...item, category: "memories" });
      }
    });

    venueItems.forEach((item) => {
      if (item.selected) {
        items.push({ ...item, category: "venue" });
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

    if (section === "memories") {
      memoriesItems.forEach((item) => {
        if (item.selected) {
          totalCost += item.cost;
        }
      });
    }

    if (section === "venue") {
      venueItems.forEach((item) => {
        if (item.selected) {
          totalCost = item.cost;
        }
      });
    }

    return totalCost;
  };

  const decorTotalCost = calculateTotalCost("decor");

  const soundTotalCost = calculateTotalCost("sound");

  const cateringTotalCost = calculateTotalCost("catering");

  const coupleExperienceTotalCost = calculateTotalCost("coupleExperience");

  const memoriesTotalCost = calculateTotalCost("memories");

  const venueTotalCost = calculateTotalCost("venue");

  const totalCost = {
    venue: venueTotalCost,
    decor: decorTotalCost,
    sound: soundTotalCost,
    catering: cateringTotalCost,
    coupleExperience: coupleExperienceTotalCost,
    memories: memoriesTotalCost,
  };

  return (
    <>
      <NavBar links={navLinks} appName={"Wedding Planner"}>
        <div className="show-details-container">
          <button
            className="details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            Ver Detalhes
          </button>
        </div>
      </NavBar>
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

              <span>
                Locais indicados para{" "}
                <strong>{numeroDeConvidados} convidados</strong>
              </span>

              <div className="venue_selection">
                {venueItems.map((item, index) => (
                  <div className="venue_main" key={index}>
                    <div className="venue-items-description">
                      <div className="venue-title">{item.name}</div>
                      <div className="venue-description">
                        {item.description}
                      </div>
                      <div className="bottom-line">
                        <div className="venue-pricing">
                          <div className="venue-cost">R${item.cost},00</div>
                        </div>
                        <input
                          className="venue-checkbox"
                          type="checkbox"
                          id={`venue_${index}`}
                          checked={item.selected}
                          onChange={() => handleVenueSelection(index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total_cost">
                <p>Custo Parcial:</p>
                <span className="amount_total">R$ {venueTotalCost},00</span>
              </div>
              <div className="show-details-container">
                <button
                  className="details-btn"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Ver Total Selecionado
                </button>
                <span className="details-span">
                  Clique para ver os itens que você já selecionou
                </span>
              </div>
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
                      <img src={item.img} alt={item.name} loading="lazy" />
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
              <div className="show-details-container">
                <button
                  className="details-btn"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Ver Total Selecionado
                </button>
                <span className="details-span">
                  Clique para ver os itens que você já selecionou
                </span>
              </div>
            </section>

            <section className="section-container decor_container" id="decor">
              <h2>Decoração & Ambientação </h2>
              <p>Com que decoração?</p>

              <div className="decor_selection">
                {decorItems.map((item, index) => (
                  <div className="decor_main" key={index}>
                    <div className="decor-img">
                      <img src={item.img} alt={item.name} loading="lazy" />
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
              <div className="show-details-container">
                <button
                  className="details-btn"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Ver Total Selecionado
                </button>
                <span className="details-span">
                  Clique para ver os itens que você já selecionou
                </span>
              </div>
            </section>

            <section className="section-container sound_container" id="sound">
              <h2>Som & Cerimônia</h2>
              <p>Como seria a sonorização?</p>

              <div className="sound_selection">
                {soundItems.map((item, index) => (
                  <div className="sound_main" key={index}>
                    <div className="sound_img">
                      <img src={item.img} alt={item.name} loading="lazy" />
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
              <div className="show-details-container">
                <button
                  className="details-btn"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Ver Total Selecionado
                </button>
                <span className="details-span">
                  Clique para ver os itens que você já selecionou
                </span>
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
                      <img src={item.img} alt={item.name} loading="lazy" />
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
              <div className="show-details-container">
                <button
                  className="details-btn"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Ver Total Selecionado
                </button>
                <span className="details-span">
                  Clique para ver os itens que você já selecionou
                </span>
              </div>
            </section>

            <section className="section-container" id="memories">
              <h2>Memórias</h2>
              <p>Como quer guardar essas memórias?</p>

              <div className="memories_selection">
                {memoriesItems.map((item, index) => (
                  <div className="memories_main" key={index}>
                    <div className="memories-img">
                      <img src={item.img} alt={item.name} loading="lazy" />
                    </div>
                    <div className="memories-items-description">
                      <div className="memories-title">{item.name}</div>
                      <div className="memories-description">
                        {item.description}
                      </div>
                      <div className="bottom-line">
                        <div className="memories-pricing">
                          <div className="memories-cost">R${item.cost},00</div>
                        </div>
                        <input
                          className="memories-checkbox"
                          type="checkbox"
                          id={`memories_${index}`}
                          checked={item.selected}
                          onChange={() => handleMemoriesSelection(index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total_cost">
                <p>Custo Parcial:</p>
                <div className="memories-partial-cost">
                  <span className="amount_total">
                    R$ {memoriesTotalCost},00
                  </span>
                </div>
              </div>
              <div className="show-details-container">
                <button
                  className="details-btn"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Ver Total Selecionado
                </button>
                <span className="details-span">
                  Clique para ver os itens que você já selecionou
                </span>
              </div>
            </section>
          </div>
        ) : (
          <div className="amount_details"></div>
        )}

        <GoHomeBtn href="#home" />
      </main>
    </>
  );
};

export default WeddingPlanner;
