import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import FeaturedPage from '../pages/FeaturedPage';

it('Check if Featured page renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <FeaturedPage />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});
