import { Fragment, useState } from 'react';
import Select from 'react-select';
import { Disclosure } from '@headlessui/react';
import { ResultModal } from '../components/ResultModal';
import { SelectPokemon, CalcResult } from '../types';
import { speedResults } from '../models/SpeedMaster';
import { statsList } from '../models/PokemonList';

export const Main = () => {
  const [pokemon, setPokemon] = useState<SelectPokemon>(null);
  const [individualValue, setIndividualValue] = useState(31);
  const [personality, setPersonality] = useState(1.0);
  const [rank, setRank] = useState(0);
  const [item, setItem] = useState(1.0);
  const [ability, setAbility] = useState(1.0);
  const [isTailwind, setIsTailwind] = useState(false);
  const [isParalysis, setIsParalysis] = useState(false);

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [calcResult, setCalcResult] = useState<CalcResult[]>([]);

  const navigation = ['Speed Checker', 'Master(Comming Soon)'];

  const options: SelectPokemon[] = statsList.map((d) => {
    return { value: d.name, label: d.name, baseStats: d.baseStatsS };
  });

  const calcClicked = () => {
    if (!pokemon) {
      return false;
    }
    
    setCalcResult(
      speedResults({
        pokemon,
        individualValue,
        personality,
        rank,
        item,
        ability,
        isTailwind,
        isParalysis,
      }),
    );
    setIsResultModalOpen(true);
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0"></div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a
                              href="#"
                              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href="#"
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Speed Checker</h1>
        </div>
      </header>
      <main>
        <ResultModal
          isOpen={isResultModalOpen}
          calcResult={calcResult}
          onClose={() => setIsResultModalOpen(false)}
        />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-6">
              <div className="mt-10 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-10 gap-10">
                      <div className="col-span-10 sm:col-span-10">
                        <label
                          htmlFor="pokemon_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Pokemon
                        </label>
                        <Select
                          defaultValue={pokemon}
                          onChange={setPokemon}
                          options={options}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-5 sm:col-span-5">
                        <label
                          htmlFor="individual_value"
                          className="block text-sm font-medium text-gray-700"
                        >
                          IVs
                        </label>
                        <select
                          id="individual_value"
                          name="individual_value"
                          value={individualValue}
                          onChange={(e) =>
                            setIndividualValue(parseInt(e.target.value))
                          }
                          autoComplete="individual_value"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value={31}>31</option>
                          <option value={30}>30</option>
                          <option value={2}>2</option>
                          <option value={1}>1</option>
                          <option value={0}>0</option>
                        </select>
                      </div>

                      <div className="col-span-5 sm:col-span-5">
                        <label
                          htmlFor="personality"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Personality
                        </label>
                        <select
                          id="personality"
                          name="personality"
                          value={personality}
                          onChange={(e) =>
                            setPersonality(parseFloat(e.target.value))
                          }
                          autoComplete="personality"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value={1.1}>1.1</option>
                          <option value={1.0}>1.0</option>
                          <option value={0.9}>0.9</option>
                        </select>
                      </div>

                      <div className="col-span-5 sm:col-span-5">
                        <label
                          htmlFor="ability"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ability
                        </label>
                        <select
                          id="ability"
                          name="ability"
                          value={ability}
                          onChange={(e) =>
                            setAbility(parseFloat(e.target.value))
                          }
                          autoComplete="ability"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value={2.0}>2.0</option>
                          <option value={1.0}>1.0</option>
                          <option value={0.5}>0.5</option>
                        </select>
                      </div>

                      <div className="col-span-5 sm:col-span-5">
                        <label
                          htmlFor="item"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Item
                        </label>
                        <select
                          id="item"
                          name="item"
                          value={item}
                          onChange={(e) => setItem(parseFloat(e.target.value))}
                          autoComplete="item"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value={2.0}>2.0</option>
                          <option value={1.5}>1.5</option>
                          <option value={1.0}>1.0</option>
                          <option value={0.5}>0.5</option>
                        </select>
                      </div>

                      <div className="col-span-5 sm:col-span-5">
                        <label
                          htmlFor="rank"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Rank
                        </label>
                        <select
                          id="rank"
                          name="rank"
                          value={rank}
                          onChange={(e) => setRank(parseInt(e.target.value))}
                          autoComplete="rank"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value={6}>+6</option>
                          <option value={5}>+5</option>
                          <option value={4}>+4</option>
                          <option value={3}>+3</option>
                          <option value={2}>+2</option>
                          <option value={1}>+1</option>
                          <option value={0}>0</option>
                          <option value={-1}>-1</option>
                          <option value={-2}>-2</option>
                          <option value={-3}>-3</option>
                          <option value={-4}>-4</option>
                          <option value={-5}>-5</option>
                          <option value={-6}>-6</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-5 grid grid-cols-10 gap-10">
                      <div className="col-span-5 sm:col-span-5">
                        <input
                          id="tailwind"
                          name="tailwind"
                          checked={isTailwind}
                          onChange={() => setIsTailwind(!isTailwind)}
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="tailwind"
                          className="font-medium text-gray-700"
                        >
                          Tailwind
                        </label>
                      </div>
                      <div className="col-span-5 sm:col-span-5">
                        <input
                          id="paralysis"
                          name="paralysis"
                          checked={isParalysis}
                          onChange={() => setIsParalysis(!isParalysis)}
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="paralysis"
                          className="font-medium text-gray-700"
                        >
                          Paralysis
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 py-3 bg-gray-50 text-left sm:px-6">
                    <button
                      type="submit"
                      onClick={calcClicked}
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Calc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
