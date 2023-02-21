import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '../components/organisms';

// Mock MyContext
jest.mock('../../../Context', () => ({
  MyContext: {
    Consumer: ({ children }) => children({
      points: 100,
      myData: [
        { product: 'Product 1', name: 'Product 1 Name', points: 50 },
        { product: 'Product 2', name: 'Product 2 Name', points: 75 },
      ],
      updateMyData: jest.fn(),
      get_redemption_products: jest.fn(),
      get_not_redemption_products: jest.fn(),
      ShowAllProducts: false,
      setShowAllProducts: jest.fn(),
    }),
  },
}));

describe('HomeScreen component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Bienvenido de vuelta!')).toBeDefined();
  });

  it('shows user points', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('100 pts')).toBeDefined();
  });

  it('shows user product list', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Product 1 Name')).toBeDefined();
    expect(getByText('Product 2 Name')).toBeDefined();
  });

  it('calls get_redemption_products when "Ganados" button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Ganados'));
    expect(get_redemption_products).toHaveBeenCalledTimes(1);
  });

  it('calls get_not_redemption_products when "Canjeables" button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Canjeables'));
    expect(get_not_redemption_products).toHaveBeenCalledTimes(1);
  });

  it('calls updateMyData when "Todos" button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Todos'));
    expect(updateMyData).toHaveBeenCalledTimes(1);
  });
});