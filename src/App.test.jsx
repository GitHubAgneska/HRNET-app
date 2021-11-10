import { render } from '@testing-library/react';
import App from './App';

test('renders the appropriate header', () => {
  const { getByText } =  render(<App />); // query is scoped to render's result
  expect (getByText("HRnet")).toBeInTheDocument();
  
  
});
