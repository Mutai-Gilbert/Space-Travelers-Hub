import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions/Mission';
import store from '../redux/store';

describe('Test Missions components', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
