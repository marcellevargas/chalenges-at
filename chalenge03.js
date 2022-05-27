const miniDex = [
  {
    dex: 35,
    name: "Clefairy",
    prevEvo: [173],
    nextEvo: [36],
  },
  {
    dex: 36,
    name: "Clefable",
    prevEvo: [35],
    nextEvo: [],
  },
  {
    dex: 133,
    name: "Eevee",
    prevEvo: [],
    nextEvo: [134, 135, 136, 196, 197, 470, 471, 700],
  },
  {
    dex: 134,
    name: "Vaporeon",
    prevEvo: [133],
    nextEvo: [],
  },
  {
    dex: 135,
    name: "Jolteon",
    prevEvo: [133],
    nextEvo: [],
  },
  {
    dex: 136,
    name: "Flareon",
    prevEvo: [133],
    nextEvo: [],
  },
  {
    dex: 173,
    name: "Cleffa",
    prevEvo: [],
    nextEvo: [35],
  },
  {
    dex: 183,
    name: "Marill",
    prevEvo: [298],
    nextEvo: [184],
  },
  {
    dex: 184,
    name: "Azumarill",
    prevEvo: [183],
    nextEvo: [],
  },
  {
    dex: 196,
    name: "Espeon",
    prevEvo: [133],
    nextEvo: [],
  },
  {
    dex: 197,
    name: "Umbreon",
    prevEvo: [133],
    nextEvo: [],
  },
  {
    dex: 280,
    name: "Ralts",
    prevEvo: [],
    nextEvo: [281],
  },
  {
    dex: 281,
    name: "Kirlia",
    prevEvo: [280],
    nextEvo: [282, 475],
  },
  {
    dex: 282,
    name: "Gardevoir",
    prevEvo: [281],
    nextEvo: [],
  },
  {
    dex: 298,
    name: "Azurill",
    prevEvo: [],
    nextEvo: [183],
  },
  {
    dex: 470,
    name: "Leafeon",
    prevEvo: [133],
    nextEvo: [],
  },
  {
    dex: 471,
    name: "Glaceon",
    prevEvo: [133],
    nextEvo: [],
  },
  {
    dex: 475,
    name: "Gallade",
    prevEvo: [281],
    nextEvo: [],
  },
  {
    dex: 700,
    name: "Sylveon",
    prevEvo: [133],
    nextEvo: [],
  },
];

function searchPokemonExact(miniDex, filtro) {
  return miniDex.filter(
    (elemento) =>
      elemento.name.toLowerCase().includes(filtro.toLowerCase()) ||
      elemento.dex == parseInt(filtro)
  );
}

function searchPokemonEvolution(miniDex, filtro) {
  let arr = miniDex.filter(
    (elemento) =>
      elemento.name.toLowerCase().includes(filtro.toLowerCase()) ||
      elemento.dex == parseInt(filtro)
  );

  let evoNumber =
    arr[0].prevEvo.length > 0 ? arr[0].prevEvo[0] : arr[0].nextEvo[0];

  return miniDex.filter(
    (el) =>
      el.prevEvo.includes(parseInt(evoNumber)) ||
      el.dex == parseInt(evoNumber) ||
      el.nextEvo.includes(parseInt(evoNumber))
  );
}

function SearchPokemon(type, miniDex, pokemon) {
  if (type.toLowerCase() == "evolution") {
    return searchPokemonEvolution(miniDex, pokemon);
  } else if (type.toLowerCase() == "exact") {
    return searchPokemonExact(miniDex, pokemon);
  } else {
    return "Escolha entre evolution ou exact";
  }
}

