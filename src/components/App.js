import React from 'react'
import { connect } from 'react-redux'
import ImageFeed from './ImageFeed'

class App extends React.Component {
  componentDidMount() {
    this.props.requestGallery()
  }
  render() {
  const { fetching, data, error } = this.props;
  return (
  <div className="App">
    <div className="App-header">
      <h1>Welcome to Pictgur</h1>
    </div>
    <div className="App-body">
      <ImageFeed 
        payload={data? data : []}
        fetching={fetching}
        error={error}
      />
    </div>
  </div>
  )
};
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    data: state.data,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestGallery: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
