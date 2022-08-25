import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import ReservePage from '../pages/ReservePage';

it('Check if Reserve page renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <ReservePage />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});
