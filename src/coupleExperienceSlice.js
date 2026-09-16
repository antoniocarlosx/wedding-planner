import { createSlice } from "@reduxjs/toolkit";

export const coupleExperienceSlice = createSlice({
  name: "coupleExperience",
  initialState: [
    {
      img: "/wedding-planner/buque-noiva.jpg",
      name: "Buquê da Noiva",
      cost: 180,
      selected: false,
    },
    {
      img: "/wedding-planner/lapela-noivo.jpg",
      name: "Lapela do Noivo",
      cost: 40,
      selected: false,
    },
    {
      img: "/wedding-planner/mesa-noivos.jpg",
      name: "Mesa dos Noivos",
      cost: 150,
      selected: false,
    },
    {
      img: "/wedding-planner/kit-votos.jpg",
      name: "Kit de Votos Personalizados",
      cost: 35,
      selected: false,
    },
    {
      img: "/wedding-planner/livro-memorias.jpg",
      name: "Livro de Memórias do Casamento",
      cost: 70,
      selected: false,
    },
    {
      img: "/wedding-planner/cartas-surpresa.jpg",
      name: "Cartas Surpresa para o Grande Dia",
      cost: 60,
      selected: false,
    },
  ],
  reducers: {
    toggleCoupleExperienceSelection: (state, action) => {
      const { payload: index } = action;
      state[index].selected = !state[index].selected;
    },
  },
});

export const { toggleCoupleExperienceSelection } =
  coupleExperienceSlice.actions;

export default coupleExperienceSlice.reducer;
