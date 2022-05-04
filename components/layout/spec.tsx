import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import LayoutContainer from './container';

test('It should render the Layout component', async () => {
  render(<LayoutContainer>Teste</LayoutContainer>);
  expect(screen.getByText('Teste')).toBeInTheDocument();
});
