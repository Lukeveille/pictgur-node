import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from '../store';
import ConnnectedGallery, { Gallery } from '../components/Gallery';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const history = createHistory();
const store = configureStore(history);
const setup = () => {
  const props = { data: [], fetching: true, error: TypeError() };
  const enzymeWrapper = shallow(<Gallery {...props}/>);

  return { props, enzymeWrapper };
}

describe('Gallery component', () => {
  it('should render loading screen', () => {
    const { enzymeWrapper } = setup();

    const div = enzymeWrapper.find('div')
    const h3 = enzymeWrapper.find('h3');
    // const headerDiv = enzymeWrapper.find('div').at(1)
    // const main = enzymeWrapper.find('main');

    // expect(appDiv.hasClass('App')).toBeTruthy();
    expect(div.hasClass('image-feed')).toBeTruthy();
    expect(enzymeWrapper.find('GalleryPreview')).toBeTruthy();
    // expect(h3.text()).toBe('Welcome to Pictgur');
    // expect(main.hasClass('App-body')).toBeTruthy();
    // expect(enzymeWrapper.find('DisplaySettings')).toBeTruthy();
    // expect(enzymeWrapper.find('Gallery')).toBeTruthy();
  });
  it('should render data', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.setProps({fetching: false})
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ConnnectedGallery />
      </ConnectedRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
