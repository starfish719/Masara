import { render } from '@testing-library/react';

import { Main } from './Main';

describe('Main', () => {
  it('should render', () => {
    const { asFragment } = render(<Main />);

    expect(asFragment()).toMatchSnapshot();
  });
});
