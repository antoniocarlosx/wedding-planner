import React from "react";
import "./NumberOfGuests.css";

const NumberOfGuests = ({ numeroDeConvidados, aoMudar }) => {
  const steps = [5, 10, 15, 50, 100, 150, 200];
  const indiceAtual = steps.indexOf(numeroDeConvidados);

  const handleChange = (e) => {
    const novoIndice = Number(e.target.value);
    aoMudar(steps[novoIndice]);
  };

  return (
    <>
      <input
        type="range"
        id="valores"
        name="valores"
        min={0}
        max={steps.length - 1}
        list="marcas"
        value={indiceAtual}
        onChange={handleChange}
      />

      <datalist id="marcas">
        {steps.map((valor) => (
          <option key={valor} value={valor}></option>
        ))}
      </datalist>
      <p>Você selecionou {numeroDeConvidados} convidados</p>
    </>
  );
};

export default NumberOfGuests;
