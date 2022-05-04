import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import BreadcrumbContainer from './container';

test('It should render the Breadcrumb component', async () => {
  const props = {
    categories: {
      path_from_root: [
        { id: '2', name: 'breadcrumb-category1' },
        { id: '3', name: 'breadcrumb-category2' }
      ],
      id: '1',
      name: 'categories'
    }
  };
  render(<BreadcrumbContainer {...props} />);
  expect(screen.getByText(/breadcrumb-category1/)).toBeInTheDocument();
  expect(screen.getByText(/breadcrumb-category2/)).toBeInTheDocument();
});
