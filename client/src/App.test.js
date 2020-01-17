import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  const component = render(<App />);
});

test("Title is rendered", () => {
  const {getByTestId} = render(<App />);

  getByTestId(/womenSoccer/i);
  
});

// test("Title text is rendered", () => {
//   const container = render(<App />);

//   container.getByText("Women's");
// })


