import { createSlice } from "@reduxjs/toolkit";

export const decorSlice = createSlice({
  name: "decor",
  initialState: [
    {
      img: "/wedding-planner/arco-floral.png",
      name: "Arco Floral Iluminado",
      cost: 200,
      quantity: 0,
    },
    {
      img: "/wedding-planner/painel-recados.png",
      name: "Painel de Recados",
      cost: 80,
      quantity: 0,
    },
    {
      img: "/wedding-planner/cavalete-boasvindas.jpg",
      name: "Cavalete de Boas-Vindas",
      cost: 80,
      quantity: 0,
    },
    {
      img: "/wedding-planner/arranjos-florais.jpg",
      name: "Arranjos Florais",
      cost: 150,
      quantity: 0,
    },
    {
      img: "/wedding-planner/velas-decorativas.jpeg",
      name: "Velas Decorativas",
      cost: 60,
      quantity: 0,
    },
    {
      img: "/wedding-planner/luz-decorativa.jpg",
      name: "Luzes Decorativas",
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