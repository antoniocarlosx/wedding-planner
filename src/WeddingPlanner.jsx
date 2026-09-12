import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WeddingPlanner.css"


const WeddingPlanner = () => {
  return (
    <>
      <header>
        <navbar className="navbar_planner">
            <div className="nav-logo">WeddingPlanner</div>
            <div className="nav-left">
                <div className="nav-links">
                    <a href="#venue" className="nav-link">Local</a>
                    <a href="#decor" className="nav-link">Decoração</a>
                    <a href="#sound" className="nav-link">Som & Cerimônia</a>
                    <a href="#catering" className="nav-link">Gastronomia & Recepção</a>
                    <a href="#coupleExperience" className="nav-link">Experiência dos Noivos</a>
                    <a href="#memories" className="nav-link">Memórias</a>

                </div>
            </div>

            <div className="nav-right">
                <button className="details-btn">Ver Detalhes</button>
            </div>
        </navbar>
      </header>

      <section id="numberOfGuests">
        <h2>Para Quantos Convidados?</h2>
      </section>

       <section id="venue">
        <h2>🌸 Local & Cerimônia</h2>
         <p>Em qual local?</p>
      </section>

      <section id="decor">
        <h2>🌿 Decoração & Ambientação	</h2>
        <p>Com que decoração?</p>
      </section>

       <section id="sound">
        <h2>🎻 Som & Cerimônia</h2>
        <p>Como seria a sonorização?</p>
      </section>

       <section id="catering">
        <h2>🥂 Gastronomia & Recepção</h2>
        <p>O que teria para comer?</p>
      </section>

       <section id="coupleExperience">
        <h2>💐 Experiência dos Noivos</h2>
        <p>Quais experiências você quer ter com seu noivo?</p>
      </section>

      <section id="memories">
        <h2>📸 Memórias</h2>
        <p>Como quer guardar essas memórias?</p>

      </section>


      
    </>
  );
};

export default WeddingPlanner;
