import { createSlice } from "@reduxjs/toolkit";

export const decorSlice = createSlice({
  name: "decor",
  initialState: [
    {
      img: "wedding-planner/arco-floral",
      name: "Arco Floral Iluminado",
      cost: 200,
      quantity: 0,
    },
    {
      img: "wedding-planner/painel-recados",
      name: "Painel de Recados para Convidados",
      cost: 80,
      quantity: 0,
    },
    {
      img: "wedding-planner/cavalete-boasvindas",
      name: "Cavalete de Boas-Vindas em Madeira",
      cost: 80,
      quantity: 0,
    },
    {
      img: "wedding-planner/arranjos-florais",
      name: "Arranjos Florais para as Mesas",
      cost: 150,
      quantity: 0,
    },
    {
      img: "wedding-planner/velas-decorativas",
      name: "Velas Decorativas para Ambientação",
      cost: 60,
      quantity: 0,
    },
    {
      img: "wedding-planner/luz-decorativa",
      name: "Luzes Decorativas de Cordão",
      cost: 120,
      quantity: 0,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});


export const { incrementQuantity, decrementQuantity } = decorSlice.actions;

export default decorSlice.reducer;