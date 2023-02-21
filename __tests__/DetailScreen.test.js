import React from 'react';
import { render } from '@testing-library/react-native';
import DetailScreen from './DetailScreen';

describe('DetailScreen', () => {
  it('renders the product name', () => {
    const product = { product: 'Test Product', createdAt: '2022-02-21T12:00:00Z', image: 'test.png', points: 100 };
    const { getByText } = render(<DetailScreen route={{ params: { product } }} />);
    const productName = getByText('Test Product');
    expect(productName).toBeDefined();
  });

  it('renders the acquired date', () => {
    const product = { product: 'Test Product', createdAt: '2022-02-21T12:00:00Z', image: 'test.png', points: 100 };
    const { getByText } = render(<DetailScreen route={{ params: { product } }} />);
    const acquiredDate = getByText('Comprado el February 21st 2022');
    expect(acquiredDate).toBeDefined();
  });

  it('renders the points acquired', () => {
    const product = { product: 'Test Product', createdAt: '2022-02-21T12:00:00Z', image: 'test.png', points: 100 };
    const { getByText } = render(<DetailScreen route={{ params: { product } }} />);
    const pointsAcquired = getByText('100 puntos');
    expect(pointsAcquired).toBeDefined();
  });

  it('renders the accept button', () => {
    const product = { product: 'Test Product', createdAt: '2022-02-21T12:00:00Z', image: 'test.png', points: 100 };
    const { getByText } = render(<DetailScreen navigation={{ navigate: jest.fn() }} route={{ params: { product } }} />);
    const acceptButton = getByText('Aceptar');
    expect(acceptButton).toBeDefined();
  });
});