import { createSlice } from "@reduxjs/toolkit";

export const memoriesSlice = createSlice({
  name: "memories",
  initialState: [
    {
      img: "/wedding-planner/fotografia-4horas.jpg",
      name: "Fotografia — 4 horas",
      cost: 800,
      selected: false,
    },
    {
      img: "/wedding-planner/fotografia-8horas.jpg",
      name: "Fotografia — 8 horas",
      cost: 1400,
      selected: false,
    },
    {
      img: "/wedding-planner/cobertura-em-video.jpg",
      name: "Cobertura em Vídeo",
      cost: 1200,
      selected: false,
    },
    {
      img: "/wedding-planner/cabine-de-fotos.jpg",
      name: "Cabine de Fotos",
      cost: 500,
      selected: false,
    },
    {
      img: "/wedding-planner/album-fotos.jpg",
      name: "Álbum Fotográfico Personalizado",
      cost: 350,
      selected: false,
    },
  ],
  reducers: {
    togglememoriesSelection: (state, action) => {
      const { payload: index } = action;
      state[index].selected = !state[index].selected;
    },
  },
});

export const { togglememoriesSelection } = memoriesSlice.actions;

export default memoriesSlice.reducer;
