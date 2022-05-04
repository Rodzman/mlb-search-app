import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ItemDetails from './container';

test('It should render the ItemDetails component', async () => {
  const props = {
    item: {
      id: '1',
      title: 'Item 1',
      thumbnail: 'https://via.placeholder.com/150',
      price: 100,
      free_shipping: true,
      shipping: 'free',
      pictures: [
        {
          url: 'https://via.placeholder.com/150',
          secure_url: 'https://via.placeholder.com/150',
          id: '1'
        }
      ],
      condition: 'new',
      sold_quantity: 33,
      description: {
        plain_text: 'Description of item 1/ncontent of description',
        text: '',
        date_created: '2020-05-01T00:00:00.000Z',
        last_updated: '2020-05-01T00:00:00.000Z'
      }
    }
  };
  render(<ItemDetails {...props} />);
  expect(screen.getByText(/Description of item 1/)).toBeInTheDocument();
});
