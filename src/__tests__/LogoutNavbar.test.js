import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import LogOutNavbar from '../components/LogOutNavBar';

it('Check if Navbar renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <LogOutNavbar />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});
