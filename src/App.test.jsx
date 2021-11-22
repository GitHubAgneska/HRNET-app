import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import NotFoundPage from './components/containers/404'

test('renders the appropriate header', () => {
  const { getByText } =  render(<App />); // query is scoped to render's result
  expect (getByText("HRNET")).toBeInTheDocument();
  expect (getByText("home")).toBeInTheDocument();
  expect (getByText("employees")).toBeInTheDocument();
});

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render (
      <Router history={history}>
          <App/>
      </Router>,
  )
  // verify page content for expected route
  // (data-testid or role query can also be used here)
  expect(screen.getByText(/home/i)).toBeInTheDocument()
  const leftClick = {button: 0}
  fireEvent.click(screen.getByText(/employees/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/current employees list/i)).toBeInTheDocument()

})

test('landing on a bad page', () => {

  const history = createMemoryHistory({ initialEntries: ['/page1', '/page2'] })

  render(
    <Router history={history}>
      <NotFoundPage />
    </Router>,
  )

  expect(screen.getByText(/oups/i)).toBeInTheDocument()
})

