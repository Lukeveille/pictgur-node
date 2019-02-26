import React from 'react'
import { connect } from 'react-redux'
import Gallery from './Gallery'

class App extends React.Component {
  componentDidMount() {
    this.props.requestGallery()
  }
  render() {
  // const { fetching, data, error } = this.props;
  return (
  <div className="App">
    <div className="App-header">
      <h1>Welcome to Pictgur</h1>
    </div>
    <div className="App-body">
      <Gallery 
        // payload={data? data : []}
        // fetching={fetching}
        // error={error}
      />
    </div>
  </div>
  )
};
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  requestGallery: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
