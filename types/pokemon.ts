export interface Pokemon {
  id: number;
  name: string;
  baseStatsS: number;
}

export interface SelectPokemon {
  value: string;
  label: string;
  baseStats: number;
}
