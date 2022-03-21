const pokemons = [
  {
    id: 25,
    name: "Pikachu",
    type: 'Electric',
    averageWeight: {
      value: 6.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
    id: 1,
    name: "Bulbasaur",
    type: 'Grass Poison',
    averageWeight: {
      value: 6.9,
      measurementUnit: "kg"
    },
    initial: true,
    image: "https://cdn2.bulbagarden.net/media/upload/7/76/Spr_5b_001.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)"
  },
  {
    id: 4,
    name: "Charmander",
    type: 'Fire',
    averageWeight: {
      value: 8.5,
      measurementUnit: "kg"
    },
    initial: true,
    image: "https://archives.bulbagarden.net/media/upload/0/0a/Spr_5b_004.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 7,
    name: "Squirtle",
    type: 'Water',
    averageWeight: {
      value: 9.0,
      measurementUnit: "kg"
    },
    initial: true,
    image: "https://cdn2.bulbagarden.net/media/upload/5/59/Spr_5b_007.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
  },
  {
    id: 10,
    name: "Caterpie",
    type: 'Bug',
    averageWeight: {
      value: 2.9,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 13,
    name: "Weedle",
    type: 'Bug Poison',
    averageWeight: {
      value: 3.2,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/9/96/Spr_5b_013.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)"
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: 'Normal Flying',
    averageWeight: {
      value: 30.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/8/86/Spr_5b_017.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)"
  },
  {
    id: 23,
    name: "Ekans",
    type: 'Poison',
    averageWeight: {
      value: 6.9,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
  },
  {
    id: 34,
    name: "Nidoking",
    type: 'Poison Ground',
    averageWeight: {
      value: 62.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/4/46/Spr_5b_034.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)"
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: 'Normal Fairy',
    averageWeight: {
      value: 5.5,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/b/bd/Spr_5b_039.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)"
  },
  {
    id: 65,
    name: "Alakazam",
    type: 'Psychic',
    averageWeight: {
      value: 48.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://cdn2.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
  },
  {
    id: 78,
    name: "Rapidash",
    type: 'Fire',
    averageWeight: {
      value: 95.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
  },
  {
    id: 87,
    name: "Dewgong",
    type: 'Water Ice',
    averageWeight: {
      value: 120.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/a/ad/Spr_5b_087.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pok%C3%A9mon)"
  },
  {
    id: 94,
    name: "Gengar",
    type: 'Ghost Poison',
    averageWeight: {
      value: 40.5,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/2/21/Spr_5b_094.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)"
  },
  {
    id: 143,
    name: "Snorlax",
    type: 'Normal',
    averageWeight: {
      value: 460.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
  },
  {
    id: 148,
    name: "Dragonair",
    type: 'Dragon',
    averageWeight: {
      value: 16.5,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
  },
  {
    id: 149,
    name: "Dragonite",
    type: 'Dragon Flying',
    averageWeight: {
      value: 210.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://archives.bulbagarden.net/media/upload/9/96/Spr_5b_149.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pok%C3%A9mon)"
  },
  {
    id: 151,
    name: "Mew",
    type: 'Psychic',
    averageWeight: {
      value: 4.0,
      measurementUnit: "kg"
    },
    initial: false,
    image: "https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
  },
];

export default pokemons;