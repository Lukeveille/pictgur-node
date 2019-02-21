import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPictures } from '../actions'
import ImageFeed from './ImageFeed'

class App extends Component {
  componentDidMount() {
    this.props.fetchPictures();
  }
  render() {
    const {
      pictureReducer
    } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Pictgur</h1>
        </div>
        <div className="App-body">
          <ImageFeed 
            payload={pictureReducer.payload}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);
const mapDispatchToProps = { fetchPictures };

export default connect(mapStateToProps, mapDispatchToProps)(App)
