import { getResultDescription, speedResults, calcSpeed } from './SpeedMaster';

describe('getResultDescription', () => {
  it('when exists description data, return description', () => {
    expect(getResultDescription(130)).toBe(
      '最速67族（アーマーガア）、無振り110族（タギングル）',
    );
  });

  it('when not exists description data, return empty', () => {
    expect(getResultDescription(-1)).toBe('');
  });
});

describe('speedResults', () => {
  const mockCalcProps = {
    pokemon: {
      value: 'hoge',
      label: 'fuga',
      baseStats: 80,
    },
    individualValue: 31,
    personality: 1.0,
    rank: 0,
    item: 1.0,
    ability: 1.0,
    isTailwind: false,
    isParalysis: false,
  };

  it('return result list', () => {
    expect(speedResults(mockCalcProps)).toEqual([
      {
        effortValue: 0,
        resultValue: 100,
      },
      {
        effortValue: 4,
        resultValue: 101,
      },
      {
        effortValue: 12,
        resultValue: 102,
      },
      {
        effortValue: 20,
        resultValue: 103,
      },
      {
        effortValue: 28,
        resultValue: 104,
      },
      {
        effortValue: 36,
        resultValue: 105,
      },
      {
        effortValue: 44,
        resultValue: 106,
      },
      {
        effortValue: 52,
        resultValue: 107,
      },
      {
        effortValue: 60,
        resultValue: 108,
      },
      {
        effortValue: 68,
        resultValue: 109,
      },
      {
        effortValue: 76,
        resultValue: 110,
      },
      {
        effortValue: 84,
        resultValue: 111,
      },
      {
        effortValue: 92,
        resultValue: 112,
      },
      {
        effortValue: 100,
        resultValue: 113,
      },
      {
        effortValue: 108,
        resultValue: 114,
      },
      {
        effortValue: 116,
        resultValue: 115,
      },
      {
        effortValue: 124,
        resultValue: 116,
      },
      {
        effortValue: 132,
        resultValue: 117,
      },
      {
        effortValue: 140,
        resultValue: 118,
      },
      {
        effortValue: 148,
        resultValue: 119,
      },
      {
        effortValue: 156,
        resultValue: 120,
      },
      {
        effortValue: 164,
        resultValue: 121,
      },
      {
        effortValue: 172,
        resultValue: 122,
      },
      {
        effortValue: 180,
        resultValue: 123,
      },
      {
        effortValue: 188,
        resultValue: 124,
      },
      {
        effortValue: 196,
        resultValue: 125,
      },
      {
        effortValue: 204,
        resultValue: 126,
      },
      {
        effortValue: 212,
        resultValue: 127,
      },
      {
        effortValue: 220,
        resultValue: 128,
      },
      {
        effortValue: 228,
        resultValue: 129,
      },
      {
        effortValue: 236,
        resultValue: 130,
      },
      {
        effortValue: 244,
        resultValue: 131,
      },
      {
        effortValue: 252,
        resultValue: 132,
      },
    ]);
  });

  it('when baseStats is 95 and personality is high, return result list', () => {
    expect(speedResults({
      pokemon: {
        value: 'hoge',
        label: 'fuga',
        baseStats: 95,
      },
      individualValue: 31,
      personality: 1.1,
      rank: 0,
      item: 1.0,
      ability: 1.0,
      isTailwind: false,
      isParalysis: false,
    })).toEqual([
      {
        effortValue: 0,
        resultValue: 126,
      },
      {
        effortValue: 4,
        resultValue: 127,
      },
      {
        effortValue: 12,
        resultValue: 128,
      },
      {
        effortValue: 20,
        resultValue: 129,
      },
      {
        effortValue: 28,
        resultValue: 130,
      },
      {
        effortValue: 36,
        resultValue: 132,
      },
      {
        effortValue: 44,
        resultValue: 133,
      },
      {
        effortValue: 52,
        resultValue: 134,
      },
      {
        effortValue: 60,
        resultValue: 135,
      },
      {
        effortValue: 68,
        resultValue: 136,
      },
      {
        effortValue: 76,
        resultValue: 137,
      },
      {
        effortValue: 84,
        resultValue: 138,
      },
      {
        effortValue: 92,
        resultValue: 139,
      },
      {
        effortValue: 100,
        resultValue: 140,
      },
      {
        effortValue: 108,
        resultValue: 141,
      },
      {
        effortValue: 116,
        resultValue: 143,
      },
      {
        effortValue: 124,
        resultValue: 144,
      },
      {
        effortValue: 132,
        resultValue: 145,
      },
      {
        effortValue: 140,
        resultValue: 146,
      },
      {
        effortValue: 148,
        resultValue: 147,
      },
      {
        effortValue: 156,
        resultValue: 148,
      },
      {
        effortValue: 164,
        resultValue: 149,
      },
      {
        effortValue: 172,
        resultValue: 150,
      },
      {
        effortValue: 180,
        resultValue: 151,
      },
      {
        effortValue: 188,
        resultValue: 152,
      },
      {
        effortValue: 196,
        resultValue: 154,
      },
      {
        effortValue: 204,
        resultValue: 155,
      },
      {
        effortValue: 212,
        resultValue: 156,
      },
      {
        effortValue: 220,
        resultValue: 157,
      },
      {
        effortValue: 228,
        resultValue: 158,
      },
      {
        effortValue: 236,
        resultValue: 159,
      },
      {
        effortValue: 244,
        resultValue: 160,
      },
      {
        effortValue: 252,
        resultValue: 161,
      },
    ]);
  });

  describe('calcSpeed', () => {
    it('return speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 110,
        },
        effortValue: 252,
        individualValue: 31,
        personality: 1.0,
        rank: 0,
        item: 1.0,
        ability: 1.0,
        isTailwind: false,
        isParalysis: false,
      };
      expect(calcSpeed(mockCalcProps)).toBe(162);
    });

    it('return most speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 110,
        },
        effortValue: 252,
        individualValue: 31,
        personality: 1.1,
        rank: 0,
        item: 1.0,
        ability: 1.0,
        isTailwind: false,
        isParalysis: false,
      };
      expect(calcSpeed(mockCalcProps)).toBe(178);
    });

    it('when most slowly, return speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 30,
        },
        effortValue: 0,
        individualValue: 0,
        personality: 0.9,
        rank: 0,
        item: 1.0,
        ability: 1.0,
        isTailwind: false,
        isParalysis: false,
      };
      expect(calcSpeed(mockCalcProps)).toBe(31);
    });

    it('when rank up, return speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 110,
        },
        effortValue: 252,
        individualValue: 31,
        personality: 1.1,
        rank: 2,
        item: 1.0,
        ability: 1.0,
        isTailwind: false,
        isParalysis: false,
      };
      expect(calcSpeed(mockCalcProps)).toBe(356);
    });

    it('when item is 1.5, return speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 110,
        },
        effortValue: 252,
        individualValue: 31,
        personality: 1.1,
        rank: 0,
        item: 1.5,
        ability: 1.0,
        isTailwind: false,
        isParalysis: false,
      };
      expect(calcSpeed(mockCalcProps)).toBe(267);
    });

    it('when ability 2.0, return speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 110,
        },
        effortValue: 252,
        individualValue: 31,
        personality: 1.1,
        rank: 0,
        item: 1.0,
        ability: 2.0,
        isTailwind: false,
        isParalysis: false,
      };
      expect(calcSpeed(mockCalcProps)).toBe(356);
    });

    it('when isTailwind, return speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 110,
        },
        effortValue: 252,
        individualValue: 31,
        personality: 1.1,
        rank: 0,
        item: 1.0,
        ability: 1.0,
        isTailwind: true,
        isParalysis: false,
      };
      expect(calcSpeed(mockCalcProps)).toBe(356);
    });

    it('when isParalysis, return speed result value', () => {
      const mockCalcProps = {
        pokemon: {
          value: 'hoge',
          label: 'fuga',
          baseStats: 110,
        },
        effortValue: 252,
        individualValue: 31,
        personality: 1.1,
        rank: 0,
        item: 1.0,
        ability: 1.0,
        isTailwind: false,
        isParalysis: true,
      };
      expect(calcSpeed(mockCalcProps)).toBe(89);
    });
  });
});
