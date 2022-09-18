import { SelectPokemon } from './';

export interface SpeedMaster {
  calcResult: number;
  description: {
    ja: string;
  };
}

export interface CalcProps {
  pokemon: SelectPokemon;
  effortValue: number;
  individualValue: number;
  personality: number;
  rank: number;
  item: number;
  ability: number;
  isTailwind: boolean;
  isParalysis: boolean;
}
