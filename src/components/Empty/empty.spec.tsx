import React from 'react';
import { render } from '@testing-library/react-native';

import { Empty } from '.';

describe('<Empty />', () => {
  const makeSut = () => {
    return render(<Empty />);
  };

  it('should mount the component', () => {
    const { getByTestId } = makeSut();

    const empty = getByTestId('empty');

    expect(empty).toBeTruthy();
  });

  it('should render the correct text', () => {
    const { getByText } = render(<Empty />);

    const emptyText = getByText('Ops, meio vazio por aqui ...');
    const emptySubtitle = getByText('Que tal buscar por um repositório?');

    expect(emptyText).toBeTruthy();
    expect(emptySubtitle).toBeTruthy();
  });
});
