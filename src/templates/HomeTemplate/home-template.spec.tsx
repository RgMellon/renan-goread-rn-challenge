import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { HomeTemplate } from '.';
import { repositories } from '../../mocks/repositories.mock';

const mockUseDispatch = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockUseDispatch,
}));

mockUseDispatch.mockReturnValue(mockDispatch);

describe('<HomeTemplate />', () => {
  let props = {
    repositories: repositories,
    handleRedirect: jest.fn(),
  };

  const makeSut = () => {
    return render(<HomeTemplate {...props} />);
  };

  it('should mount the component', () => {
    const { getByTestId } = makeSut();

    const homeTemplate = getByTestId('home-template');

    expect(homeTemplate).toBeTruthy();
  });

  it('should render the header of template', () => {
    const { getByTestId } = makeSut();

    const header = getByTestId('header');

    expect(header).toBeTruthy();
  });
  it('should render the correct number of repositories', () => {
    const { getByTestId } = makeSut();
    const homeTemplate = getByTestId('home-template');

    expect(homeTemplate.props.data).toHaveLength(1);
  });

  it('should be able to call handleRedirect when card is clicked', () => {
    const { getByTestId } = makeSut();
    const card = getByTestId('card-0');

    fireEvent(card, 'onPress');

    expect(props.handleRedirect).toHaveBeenCalledTimes(1);
  });

  it('should render the empty page when list is empty', () => {
    const { getByTestId } = render(
      <HomeTemplate {...props} repositories={[]} />
    );

    const empty = getByTestId('empty');

    expect(empty).toBeTruthy();
  });
});
