import { render } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

describe('Sidebar Component', () => {
  it('renders the sidebar correctly', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('People')).toBeInTheDocument();
    expect(getByText('Settings')).toBeInTheDocument();
  });
});
