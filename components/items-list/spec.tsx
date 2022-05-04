import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ItemsListContainer from './container';

describe('Test of ItemsList component', () => {
  test('It should render the Main component with free shipping', async () => {
    const props = {
      data: {
        results: [
          {
            id: '1',
            title: 'teste',
            shipping: { free_shipping: true },
            price: 1000
          }
        ]
      }
    };
    render(<ItemsListContainer {...props}>Teste</ItemsListContainer>);
    expect(screen.getByText('teste')).toBeInTheDocument();
  });

  test('It should render the Main component without free shipping', async () => {
    const props = {
      data: {
        results: [
          {
            id: '1',
            title: 'teste',
            shipping: { free_shipping: false },
            price: 1000
          }
        ]
      }
    };
    render(<ItemsListContainer {...props}>Teste</ItemsListContainer>);
    expect(screen.getByText('teste')).toBeInTheDocument();
  });
});
