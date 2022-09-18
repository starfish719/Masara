import { fireEvent, render } from '@testing-library/react';

import { CalcResult } from '../types';
import { ResultModal } from './ResultModal';

describe('ResultModal', () => {
  const onCloseMock = jest.fn();
  const calcResultMock: CalcResult[] = [
    {
      effortValue: 0,
      resultValue: 100,
    },
    {
      effortValue: 4,
      resultValue: 101,
    },
    {
      effortValue: 8,
      resultValue: 102,
    },
  ];

  it('when isOpen is false, should render', () => {
    const { asFragment } = render(
      <ResultModal
        isOpen={false}
        calcResult={calcResultMock}
        onClose={onCloseMock}
      />,
      { container: document.body },
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('when isOpen is true, should render', () => {
    const { asFragment } = render(
      <ResultModal
        isOpen={true}
        calcResult={calcResultMock}
        onClose={onCloseMock}
      />,
      { container: document.body },
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('when clicked close button, call onClose', () => {
    const { getByText } = render(
      <ResultModal
        isOpen={true}
        calcResult={calcResultMock}
        onClose={onCloseMock}
      />,
      { container: document.body },
    );

    fireEvent.click(getByText('Close'));
    expect(onCloseMock).toBeCalled();
  });
});
