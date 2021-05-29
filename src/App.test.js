
import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './App';



it('render without crashimg', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainApp />, div)
  ReactDOM.unmountComponentAtNode(div)
})

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

