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
         <h2>Em qual local?</h2>
      </section>

      <section id="decor">
        <h2>Com que decoração?</h2>
      </section>

       <section id="sound">
        <h2>Como seria a sonorização?</h2>
      </section>

       <section id="catering">
        <h2>O que teria para comer?</h2>
      </section>

       <section id="coupleExperience">
        <h2>Quais experiências você quer ter com seu noivo?</h2>
      </section>

      <section id="memories">
        <h2>Como quer guardar essas memórias?</h2>

      </section>


      
    </>
  );
};

export default WeddingPlanner;
