import { CalcProps, CalcResult } from '../types';
import { speedMasterList } from './SpeedMasterList';

export const getResultDescription = (resultValue: number) => {
  const result = speedMasterList.find(
    (speedMaster) => speedMaster.calcResult === resultValue,
  );

  return result?.description?.ja || '';
};

export const speedResults = (
  calcProps: Omit<CalcProps, `effortValue`>,
): CalcResult[] => {
  const { pokemon } = calcProps;

  if (pokemon === null) {
    return [];
  }

  let tmpResult = 0;
  const result: CalcResult[] = [];
  for (let effortValue = 0; effortValue <= 252; effortValue += 4) {
    const resultValue = calcSpeed({ ...calcProps, effortValue });
    if (tmpResult === resultValue) {
      continue;
    }

    result.push({
      effortValue: effortValue,
      resultValue: resultValue,
    });

    tmpResult = resultValue;
  }

  return result;
};

export const calcSpeed = (calcProps: CalcProps) => {
  const {
    pokemon,
    individualValue,
    effortValue,
    personality,
    rank,
    item,
    ability,
    isTailwind,
    isParalysis,
  } = calcProps;

  const level: number = 50;

  let calcResult = pokemon.baseStats * 2 + individualValue + effortValue / 4;
  calcResult = Math.floor((calcResult * level) / 100 + 5);
  calcResult = Math.floor(calcResult * personality);

  if (rank > 0) {
    calcResult = Math.floor((calcResult * (2 + rank)) / 2);
  } else if (rank < 0) {
    calcResult = Math.floor((calcResult * 2) / (2 - rank));
  }

  calcResult *= item;
  calcResult *= ability;

  if (isTailwind === true) {
    calcResult *= 2;
  }

  if (isParalysis === true) {
    calcResult /= 2;
  }

  return Math.floor(calcResult);
};
