import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WeddingPlanner.css";
import TotalCost from "./TotalCost";
import NumberOfGuests from "./NumberOfGuests";
import ItemsDisplay from "./ItemsDisplay";

const WeddingPlanner = () => {
  const [showDetails, setShowDetails] = useState(false);

  const totalCost = {
    venue: 0,
    decor: 0,
    sound: 0,
    catering: 0,
    coupleExperience: 0,
    memories: 0,
  };

  const listaDeItens = [
    // venue
    { category: "venue", name: "Casarão Histórico", cost: 5500 },

    // decor
    {
      category: "decor",
      name: "Arco Floral Iluminado",
      cost: 200,
      quantity: 1,
    },
    {
      category: "decor",
      name: "Arranjos Florais para as Mesas",
      cost: 150,
      quantity: 6,
    },
    {
      category: "decor",
      name: "Luzes Decorativas de Cordão",
      cost: 120,
      quantity: 3,
    },

    // sound
    {
      category: "sound",
      name: "Sistema de Som para Cerimônia",
      cost: 150,
      quantity: 1,
    },
    {
      category: "sound",
      name: "Microfone Sem Fio para os Votos",
      cost: 45,
      quantity: 2,
    },

    // catering
    { category: "catering", name: "Almoço Festivo", cost: 65 },
    { category: "catering", name: "Jantar de Gala", cost: 70 },
    { category: "catering", name: "Mesa de Doces & Sobremesas", cost: 30 },

    // coupleExperience
    { category: "coupleExperience", name: "Buquê da Noiva", cost: 180 },
    { category: "coupleExperience", name: "Lapela do Noivo", cost: 40 },
    { category: "coupleExperience", name: "Mesa dos Noivos", cost: 150 },

    // memories
    { category: "memories", name: "Fotografia — 8 horas", cost: 1400 },
    { category: "memories", name: "Cabine de Fotos", cost: 500 },
    {
      category: "memories",
      name: "Álbum Fotográfico Personalizado",
      cost: 350,
    },
  ];

  const [numeroDeConvidados, setNumeroDeConvidados] = useState(5);

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
              items={listaDeItens}
              numeroDeConvidados={numeroDeConvidados}
            />
          )}
        />
      )}

      <section className="section-card" id="numberOfGuests">
        <h2>Para Quantos Convidados?</h2>
        <NumberOfGuests
          numeroDeConvidados={numeroDeConvidados}
          aoMudar={setNumeroDeConvidados}
        />
      </section>

      <section className="section-card" id="venue">
        <h2>🌸 Local & Cerimônia</h2>
        <p>Em qual local?</p>
      </section>

      <section className="section-card" id="decor">
        <h2>🌿 Decoração & Ambientação </h2>
        <p>Com que decoração?</p>
      </section>

      <section className="section-card" id="sound">
        <h2>🎻 Som & Cerimônia</h2>
        <p>Como seria a sonorização?</p>
      </section>

      <section className="section-card" id="catering">
        <h2>🥂 Gastronomia & Recepção</h2>
        <p>O que teria para comer?</p>
      </section>

      <section className="section-card" id="coupleExperience">
        <h2>💐 Experiência dos Noivos</h2>
        <p>Quais experiências você quer ter com seu noivo?</p>
      </section>

      <section className="section-card" id="memories">
        <h2>📸 Memórias</h2>
        <p>Como quer guardar essas memórias?</p>
      </section>
    </>
  );
};

export default WeddingPlanner;
