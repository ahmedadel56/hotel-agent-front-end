import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';

it('Check if Navbar renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});
