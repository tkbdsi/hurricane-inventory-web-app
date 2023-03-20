import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders a link to a pantry page', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/pantry/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a link to a H20 page', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/h20/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a link to a garage cabinet page', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/garage cabinet/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a link to a garage tote page', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/garage tote/i);
  expect(linkElement).toBeInTheDocument();
});
