import React from 'react';
import { render } from '@testing-library/react-native';

import { Card } from '.';
import { mock } from '../../mocks/repository.mock';

describe('<Card />', () => {
  const makeSut = () => {
    return render(<Card data={mock} />);
  };

  it('should render the component', () => {
    const { getByTestId } = makeSut();

    const cardContainer = getByTestId('card-container');

    expect(cardContainer).toBeTruthy();
  });

  it('should render with the right props passed to the component', () => {
    const { getByText, getByTestId } = makeSut();

    const cardTitle = getByText(mock.name);
    const cardUser = getByText(mock.owner.login);
    const cardImage = getByTestId('card-avatar');
    const cardStars = getByTestId('card-stars');

    expect(cardImage.props.source.uri).toEqual(mock.owner.avatar_url);
    expect(cardTitle).toBeTruthy();
    expect(cardUser).toBeTruthy();
    expect(cardStars.props.children[0]).toEqual(12312);
  });
});
