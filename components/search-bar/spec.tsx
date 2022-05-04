import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBarContainer from './container';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('It should render the SearchBar component', async () => {
  useRouter.mockImplementationOnce(() => ({
    push: jest.fn()
  }));

  render(<SearchBarContainer />);

  const input = screen.getByTestId('search-bar-input');
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'test' } });
  expect(input).toHaveValue('test');

  const button = screen.getByTestId('search-bar-button');
  fireEvent.click(button);
  expect(useRouter).toHaveBeenCalled();
});
