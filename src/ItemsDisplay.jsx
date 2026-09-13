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
          {itensDeVenue.length > 0 && (
            <tbody>
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <strong>🌸 Local &amp; Cerimônia</strong>
                </td>
              </tr>
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
            </tbody>
          )}

          {itensDeDecor.length > 0 && (
            <tbody>
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <strong>🌿 Decoração &amp; Ambientação</strong>
                </td>
              </tr>
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
            </tbody>
          )}

          {itensDeSound.length > 0 && (
            <tbody>
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <strong>🎻 Som &amp; Cerimônia</strong>
                </td>
              </tr>
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
            </tbody>
          )}

          {itensDeCatering.length > 0 && (
            <tbody>
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <strong>🥂 Gastronomia &amp; Recepção</strong>
                </td>
              </tr>
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
            </tbody>
          )}

          {itensDeCoupleExperience.length > 0 && (
            <tbody>
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <strong>💐 Experiência dos Noivos</strong>
                </td>
              </tr>
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
                  <td>1 Item</td>
                  <td>R$ {item.cost},00</td>
                </tr>
              ))}
            </tbody>
          )}

           {itensDeMemories.length > 0 && (
            <tbody>
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <strong>📸 Memórias</strong>
                </td>
              </tr>
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
                  <td>1 Item</td>
                  <td>R$ {item.cost},00</td>
                </tr>
              ))}
            </tbody>
          )}

        </table>
      </div>
    </>
  );
};

export default ItemsDisplay;
