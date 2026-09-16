import { createSlice } from "@reduxjs/toolkit";

const venuesByCapacity = {
  5: [
    {
      name: "Mini Bistrô Acolhedor",
      description:
        "Um ambiente charmoso e reservado, perfeito para uma celebração íntima e sofisticada.",
      cost: 1100,
      selected: false,
    },
    {
      name: "Casa Jardim Íntimo",
      description:
        "Uma charmosa casa cercada por verde, ideal para uma cerimônia pequena e acolhedora.",
      cost: 1300,
      selected: false,
    },
    {
      name: "Varanda Romântica",
      description:
        "Uma varanda elegante e iluminada, criando o cenário perfeito para poucos convidados.",
      cost: 1500,
      selected: false,
    },
    {
      name: "Bistrô da Praça",
      description:
        "Um espaço urbano e sofisticado, com atmosfera aconchegante para um casamento exclusivo.",
      cost: 1700,
      selected: false,
    },
  ],

  10: [
    {
      name: "Gazebo à Beira-Mar",
      description:
        "Um gazebo encantador com vista para o mar, perfeito para uma cerimônia inesquecível.",
      cost: 900,
      selected: false,
    },
    {
      name: "Terraço Privativo",
      description:
        "Um terraço elegante e reservado, com iluminação suave e uma atmosfera sofisticada.",
      cost: 1200,
      selected: false,
    },
    {
      name: "Casa de Campo Intimista",
      description:
        "Um refúgio cercado pela natureza, combinando conforto, charme e tranquilidade.",
      cost: 1500,
      selected: false,
    },
    {
      name: "Varanda com Jardim",
      description:
        "Uma varanda cercada por flores e verde, criando um cenário delicado e romântico.",
      cost: 1800,
      selected: false,
    },
  ],

  15: [
    {
      name: "Espaço Lounge Intimista",
      description:
        "Um ambiente contemporâneo e elegante, pensado para celebrações exclusivas e acolhedoras.",
      cost: 3500,
      selected: false,
    },
    {
      name: "Jardim Provençal",
      description:
        "Um jardim inspirado no charme francês, com flores, luz natural e atmosfera romântica.",
      cost: 2800,
      selected: false,
    },
    {
      name: "Salão Petit",
      description:
        "Um pequeno salão sofisticado, com decoração elegante e ambiente reservado.",
      cost: 3000,
      selected: false,
    },
    {
      name: "Casa Colonial",
      description:
        "Uma charmosa construção histórica com arquitetura clássica e jardins acolhedores.",
      cost: 3200,
      selected: false,
    },
  ],

  50: [
    {
      name: "Jardim Secreto",
      description:
        "Um jardim exuberante e reservado, cercado por flores e vegetação cuidadosamente planejada.",
      cost: 700,
      selected: false,
    },
    {
      name: "Espaço Garden",
      description:
        "Um amplo espaço ao ar livre, com jardins bem cuidados e atmosfera leve e elegante.",
      cost: 2500,
      selected: false,
    },
    {
      name: "Chácara para Eventos",
      description:
        "Uma propriedade cercada pela natureza, perfeita para uma celebração descontraída e sofisticada.",
      cost: 3200,
      selected: false,
    },
    {
      name: "Salão com Jardim",
      description:
        "Um salão elegante integrado a um belo jardim, unindo conforto e natureza.",
      cost: 3800,
      selected: false,
    },
  ],

  100: [
    {
      name: "Espaço Imperial",
      description:
        "Um salão imponente com arquitetura clássica, lustres elegantes e ambientes amplos.",
      cost: 4500,
      selected: false,
    },
    {
      name: "Salão Nobre",
      description:
        "Um espaço sofisticado com pé-direito alto e uma atmosfera digna de grandes celebrações.",
      cost: 5000,
      selected: false,
    },
    {
      name: "Villa dos Jardins",
      description:
        "Uma elegante villa cercada por jardins, unindo requinte, natureza e conforto.",
      cost: 5500,
      selected: false,
    },
    {
      name: "Espaço Grand Hall",
      description:
        "Um grande salão contemporâneo, projetado para celebrações marcantes e sofisticadas.",
      cost: 6000,
      selected: false,
    },
  ],

  150: [
    {
      name: "Casa de Eventos Central",
      description:
        "Um espaço completo e versátil, com estrutura sofisticada para grandes celebrações.",
      cost: 6500,
      selected: false,
    },
    {
      name: "Espaço Jardim Imperial",
      description:
        "Um amplo jardim de inspiração clássica, perfeito para cerimônias elegantes ao ar livre.",
      cost: 7000,
      selected: false,
    },
    {
      name: "Salão Mediterrâneo",
      description:
        "Arquitetura inspirada no Mediterrâneo, com ambientes claros, amplos e sofisticados.",
      cost: 7500,
      selected: false,
    },
    {
      name: "Villa das Palmeiras",
      description:
        "Uma elegante propriedade cercada por palmeiras e jardins, ideal para grandes celebrações.",
      cost: 8000,
      selected: false,
    },
  ],

  200: [
    {
      name: "Casarão Histórico",
      description:
        "Uma construção histórica de arquitetura marcante, perfeita para uma celebração memorável.",
      cost: 5500,
      selected: false,
    },
    {
      name: "Palácio das Acácias",
      description:
        "Um espaço grandioso cercado por jardins, com arquitetura clássica e ambientes majestosos.",
      cost: 8500,
      selected: false,
    },
    {
      name: "Grande Salão Colonial",
      description:
        "Um amplo salão de inspiração colonial, combinando tradição, elegância e imponência.",
      cost: 9500,
      selected: false,
    },
    {
      name: "Centro de Eventos Central",
      description:
        "Uma estrutura completa e moderna, preparada para grandes festas com conforto e elegância.",
      cost: 11000,
      selected: false,
    },
  ],
};

export const venueSlice = createSlice({
  name: "venue",
  initialState: venuesByCapacity,
  reducers: {
    toggleVenueSelection: (state, action) => {
      const { payload: index } = action;
      
    },
  },
});

export const { toggleVenueSelection } = venueSlice.actions;

export default venueSlice.reducer;
