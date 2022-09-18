import { CalcResult } from '../types';
import { getResultDescription } from '../models/SpeedMaster';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  calcResult: CalcResult[];
  onClose: () => void;
};

export const ResultModal = (props: Props) => {
  const { isOpen, calcResult, onClose } = props;

  const customStyles = {
    content: {
      border: 'none',
      background: 'none',
      width: '100%',
      inset: 0
    },
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="CalcResult"
      style={customStyles}
    >
      <div className="w-full items-start min-h-screen pt-4 px-4 pb-20 text-left sm:block sm:p-0">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="w-full inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 min-w-full">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 sm:mt-0 sm:text-left min-w-full">
                <div
                  className="mt-2 overflow-y-auto"
                  style={{ maxHeight: '70vh' }}
                >
                  {calcResult.map((result) => {
                    return (
                      <div
                        key={result.effortValue}
                        className="pt-3 pb-3 border-b-2"
                      >
                        <p className="text-sm text-gray-500 mb-1">
                          実数値: {result.resultValue}
                        </p>
                        <p className="text-sm text-gray-500 mb-1">
                          努力値: {result.effortValue}
                        </p>
                        <p className="text-sm text-gray-500">
                          {getResultDescription(result.resultValue)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
