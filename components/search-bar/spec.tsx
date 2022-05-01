import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBarContainer from './container';
import Router from 'next/router';
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
import '@testing-library/jest-dom/extend-expect';

test('It render the SearchBar component', async () => {
  // const user = userEvent.setup();
  // const spyRouter = jest.spyOn(Router, 'push');
  const teste = useRouter.mockImplementationOnce(() => ({
    push: jest.fn()
  }));
  render(<SearchBarContainer />);
  const input = screen.getByTestId('search-bar-input');
  expect(input).toBeInTheDocument();
  await userEvent.type(input, 'test{enter}');
  expect(input).toHaveValue('test');
});
