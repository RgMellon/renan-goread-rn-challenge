import React from 'react';
import { render } from '@testing-library/react-native';

import { Card } from '.';

const mock = {
  title: 'some-title',
  image: 'https://avatars.githubusercontent.com/u/29661994?v=4',
  stars: 4,
};

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

    const cardTitle = getByText(mock.title);
    const cardImage = getByTestId('card-avatar');
    const cardStars = getByTestId('card-stars');

    expect(cardImage.props.source.uri).toEqual(mock.image);
    expect(cardTitle).toBeTruthy();
    expect(cardStars.props.children).toEqual(4);
  });
});
