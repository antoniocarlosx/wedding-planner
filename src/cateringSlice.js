import { createSlice } from "@reduxjs/toolkit";

export const cateringSlice = createSlice({
  name: "catering",
  initialState: [
    {
      img: "/wedding-planner/cafe-da-manha.jpg",
      name: "Café da Manhã de Noivado",
      description: "Pães artesanais, frutas da estação, geleias e café fresco.",
      cost: 25,
      selected: false,
    },
    {
      img: "/wedding-planner/brunch-elegante.jpg",
      name: "Brunch Elegante",
      description:
        "Combinação sofisticada de pratos leves, quiches e bebidas especiais.",
      cost: 50,
      selected: false,
    },
    {
      img: "/wedding-planner/almoco-festivo.jpg",
      name: "Almoço Festivo",
      description:
        "Buffet completo com opções de carnes, guarnições e saladas nobres.",
      cost: 65,
      selected: false,
    },
    {
      img: "/wedding-planner/jantar-gala.jpg",
      name: "Jantar de Gala",
      description: "Menu requintado de alta gastronomia servido à francesa.",
      cost: 70,
      selected: false,
    },
    {
      img: "/wedding-planner/coquetel-finger-foods.jpg",
      name: "Coquetel com Finger Foods",
      description: "Canapés variados, petiscos gourmet e drinks volantes.",
      cost: 45,
      selected: false,
    },
    {
      img: "/wedding-planner/mesa-sobremesas.jpg",
      name: "Mesa de Doces & Sobremesas",
      description:
        "Doces finos, mini tortas e sobremesas artesanais selecionadas.",
      cost: 30,
      selected: false,
    },
  ],
  reducers: {
    toggleCateringSelection: (state, action) => {
      const { payload: index } = action;
      state[index].selected = !state[index].selected;
    },
  },
});

export const { toggleCateringSelection } = cateringSlice.actions;

export default cateringSlice.reducer;
