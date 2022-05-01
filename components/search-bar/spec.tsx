import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SearchBarContainer from './container';

test('It render the SearchBar component', () => {
    render(<SearchBarContainer>Teste</SearchBarContainer>);
  expect(true).toBe(true);
});
