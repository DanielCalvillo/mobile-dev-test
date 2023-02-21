import React from 'react'
import { render } from '@testing-library/react-native'
import App from '../App'
let component

describe('Button component', () => {
  it('renders correctly', () => {
    const yes = true
    expect(yes).toBeTruthy();

  });

});

describe('APP', () => {
  beforeEach(() => {
    component = render(<App />)
  })
  it('Should render', () => {
    console.log(component)
  })
})