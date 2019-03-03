import React from 'react'
import { connect } from 'react-redux'
import Gallery from './Gallery'
import DisplaySettings from './DisplaySettings'
import { apiRequest } from '../actions';

export class App extends React.Component {
  componentDidMount() {
    this.props.requestGallery()
  }
  render() {
  return (
  <div className="App">
    <div className="App-header">
      <h1>Welcome to Pictgur</h1>
    </div>
    <div className="App-body">
      <DisplaySettings />
      <Gallery />
    </div>
  </div>
  )
};
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  requestGallery: () => dispatch(apiRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
