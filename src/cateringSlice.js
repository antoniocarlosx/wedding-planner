import { createSlice } from "@reduxjs/toolkit";

export const cateringSlice = createSlice({
  name: "catering",
  initialState: [
    {
      img: "/wedding-planner/cafe-da-manha.jpg",
      name: "Café da Manhã de Noivado",
      cost: 25,
      selected: false,
    },
    {
      img: "/wedding-planner/brunch-elegante.jpg",
      name: "Brunch Elegante",
      cost: 50,
      selected: false,
    },
    {
      img: "/wedding-planner/almoco-festivo.jpg",
      name: "Almoço Festivo",
      cost: 65,
      selected: false,
    },
    {
      img: "/wedding-planner/jantar-gala.jpg",
      name: "Jantar de Gala",
      cost: 70,
      selected: false,
    },
    {
      img: "/wedding-planner/coquetel-finger-foods.jpg",
      name: "Coquetel com Finger Foods",
      cost: 45,
      selected: false,
    },
    {
      img: "/wedding-planner/mesa-sobremesas.jpg",
      name: "Mesa de Doces & Sobremesas",
      cost: 30,
      selected: false,
    },
  ],
  reducers: {
    incrementCateringQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },

    toggleCateringSelection: (state, action) => {
      const { payload: index } = action;
      state[index].selected = !state[index].selected;
    },
  },
});

export const { toggleCateringSelection } = cateringSlice.actions;

export default cateringSlice.reducer;
