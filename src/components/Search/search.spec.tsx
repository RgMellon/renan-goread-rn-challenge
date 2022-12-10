import { fireEvent, render } from '@testing-library/react-native';
import { Search } from '.';

const mockUseDispatch = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockUseDispatch,
}));

mockUseDispatch.mockReturnValue(mockDispatch);

describe('Search', () => {
  const makeSut = () => {
    return render(<Search />);
  };

  it('should mount the component', () => {
    const { getByTestId } = makeSut();

    const search = getByTestId('search-container');

    expect(search).toBeTruthy();
  });

  it('should show the placeholder', () => {
    const { getByPlaceholderText } = makeSut();

    const placeholder = getByPlaceholderText('Buscar repositórios');

    expect(placeholder).toBeTruthy();
  });

  it('should be able to text on search input', () => {
    const { getByTestId } = makeSut();

    const inputSearch = getByTestId('input-search');

    const textSearch = 'some repo';

    fireEvent.changeText(inputSearch, textSearch);
    expect(inputSearch.props.value).toBe(textSearch);
  });
});
