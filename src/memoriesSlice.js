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
    {
      img: "/wedding-planner/melhores-momentos.jpg",
      name: "Vídeo Highlights (Melhores Momentos)",
      cost: 450,
      selected: false,
    },
  ],
  reducers: {
    toggleMemoriesSelection: (state, action) => {
      const { payload: index } = action;
      const item = state[index];
      const session4hours = "Fotografia — 4 horas";
      const session8hours = "Fotografia — 8 horas";

      if (item.name === session4hours || item.name === session8hours) {
        const otherSession =
          item.name === session4hours ? session8hours : session4hours;

        const otherItem = state.find((i) => i.name === otherSession);

        if (otherItem && otherItem.selected) {
          otherItem.selected = false;
        }
      }

      item.selected = !item.selected;
    },
  },
});

export const { toggleMemoriesSelection } = memoriesSlice.actions;

export default memoriesSlice.reducer;


