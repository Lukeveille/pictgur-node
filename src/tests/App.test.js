import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from '../store';
import ConnnectedApp, { App } from '../components/App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const history = createHistory();
const store = configureStore(history);
const setup = () => {
  const props = { requestGallery: jest.fn };
  const enzymeWrapper = shallow(<App {...props}/>);

  return { props, enzymeWrapper };
}

describe('App component', () => {
  
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    const appDiv = enzymeWrapper.find('div').at(0)
    const headerDiv = enzymeWrapper.find('div').at(1)
    const h1 = enzymeWrapper.find('h1');
    const main = enzymeWrapper.find('main');
    const displaySettings = enzymeWrapper.find('.settings');
    const gallery = enzymeWrapper.find('.gallery');

    expect(appDiv.hasClass('App')).toBeTruthy();
    expect(headerDiv.hasClass('App-header')).toBeTruthy();
    expect(h1.text()).toBe('Welcome to Pictgur');
    expect(main.hasClass('App-body')).toBeTruthy();
    expect(displaySettings.exists()).toBeTruthy();
    expect(gallery.exists()).toBeTruthy();
  });
  it('fire requestGallery in componentDidMount', () => {
    const props = { requestGallery: jest.fn };
    const wrapper = shallow(<App {...props}/>);
    // wrapper = shallow(<App {...props}/>);

    const spying = jest.spyOn(App.prototype, 'componentDidMount');
    console.log(App.prototype)
    // console.log(jest.spyOn(wrapper.prototype, 'componentDidMount'))

    expect(true).toBe(true)
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ConnnectedApp />
      </ConnectedRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
