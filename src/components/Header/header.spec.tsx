import React from 'react';
import { render } from '@testing-library/react-native';

import { Header } from '.';

describe('<Header />', () => {
  const makeSut = () => {
    return render(<Header title="mock-title" />);
  };

  it('should render the header title', () => {
    const { getByText } = makeSut();

    const headerTitle = getByText('mock-title');

    expect(headerTitle).toBeTruthy();
  });
});
