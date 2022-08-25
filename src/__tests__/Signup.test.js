import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Signup from '../components/SignUp';

it('Check if Sign up page renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});
