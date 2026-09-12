import React from "react";
import "./ItemsDisplay.css";

const ItemsDisplay = ({ items, numeroDeConvidados }) => {
  if (items.length === 0) {
    return <p>Nenhum Item selecionado</p>;
  }

  const itensDeVenue = items.filter((item) => item.category === "venue");
  const itensDeDecor = items.filter((item) => item.category === "decor");
  const itensDeSound = items.filter((item) => item.category === "sound");
  const itensDeCatering = items.filter((item) => item.category === "catering");
  const itensDeCoupleExperience = items.filter(
    (item) => item.category === "coupleExperience",
  );
  const itensDeMemories = items.filter((item) => item.category === "memories");

  return (
    <>
      <div className="display_box1">
        <table className="table_item_data">
          <thead>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={4}>
                <strong>🌸 Local &amp; Cerimônia</strong>
              </td>
            </tr>
          </thead>

          <tbody>
            {itensDeVenue.length > 0 && (
              <>
                <tr>
                  <th>Nome</th>
                  <th>Custo</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
                {itensDeVenue.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>R$ {item.cost},00</td>
                    <td>1 Local</td>
                    <td>R$ {item.cost},00</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
          <thead>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={4}>
                <strong>🌿 Decoração &amp; Ambientação</strong>
              </td>
            </tr>
          </thead>

          <tbody>
            {itensDeDecor.length > 0 && (
              <>
                <tr>
                  <th>Nome</th>
                  <th>Custo</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
                {itensDeDecor.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>R$ {item.cost},00</td>
                    <td>{item.quantity}</td>
                    <td>R$ {item.cost * item.quantity},00</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>

           <thead>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={4}>
                <strong>🎻 Som &amp; Cerimônia</strong>
              </td>
            </tr>
          </thead>

          <tbody>
            {itensDeSound.length > 0 && (
              <>
                <tr>
                  <th>Nome</th>
                  <th>Custo</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
                {itensDeSound.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>R$ {item.cost},00</td>
                    <td>{item.quantity}</td>
                    <td>R$ {item.cost * item.quantity},00</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>

          <thead>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={4}>
                <strong>🥂 Gastronomia &amp; Recepção</strong>
              </td>
            </tr>
          </thead>

          <tbody>
            {itensDeCatering.length > 0 && (
              <>
                <tr>
                  <th>Nome</th>
                  <th>Custo</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
                {itensDeCatering.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>R$ {item.cost},00</td>
                    <td>Para {numeroDeConvidados} Convidados</td>
                    <td>R$ {item.cost * numeroDeConvidados},00</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>

           <thead>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={4}>
                <strong>💐 Experiência dos Noivos</strong>
              </td>
            </tr>
          </thead>

          <tbody>
            {itensDeCoupleExperience.length > 0 && (
              <>
                <tr>
                  <th>Nome</th>
                  <th>Custo</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
                {itensDeCoupleExperience.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>R$ {item.cost},00</td>
                    <td>1</td>
                    <td>R$ {item.cost},00</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
           <thead>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={4}>
                <strong>📸 Memórias</strong>
              </td>
            </tr>
          </thead>

          <tbody>
            {itensDeMemories.length > 0 && (
              <>
                <tr>
                  <th>Nome</th>
                  <th>Custo</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
                {itensDeMemories.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>R$ {item.cost},00</td>
                    <td>1</td>
                    <td>R$ {item.cost},00</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemsDisplay;
