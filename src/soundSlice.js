import { createSlice } from "@reduxjs/toolkit";

export const soundSlice = createSlice({
  name: "sound",
  initialState: [
    {
      img: "/wedding-planner/sistema-de-som.jpg",
      name: "Sistema de Som",
      cost: 150,
      quantity: 0,
    },
    {
      img: "/wedding-planner/caixa-de-som-bluetooth.jpg",
      name: "Caixa de Som Bluetooth",
      cost: 35,
      quantity: 0,
    },
    {
      img: "/wedding-planner/microfone-sem-fio.jpg",
      name: "Microfone Sem Fio",
      cost: 45,
      quantity: 0,
    },
    {
      img: "/wedding-planner/kit-de-som.jpg",
      name: "Kit de Música",
      cost: 80,
      quantity: 0,
    },
  ],
  reducers: {
    incrementSoundQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },

    decrementSoundQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});


export const { incrementSoundQuantity, decrementSoundQuantity } = soundSlice.actions;

export default soundSlice.reducer;