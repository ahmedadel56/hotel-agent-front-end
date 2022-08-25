import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Social from '../components/Social';

it('Check if Navbar renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Social />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});
