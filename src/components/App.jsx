import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsWithRedux } from '../actions'
import { ImageFeed } from './ImageFeed.jsx'

class App extends Component {
  componentDidMount() {
    this.props.fetchPostsWithRedux();
  }
  render() {
    const {
      pictureReducer
    } = this.props;
    console.log(pictureReducer)
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Pictgur</h1>
        </div>
        <div className="App-body">
          <ImageFeed 
            pictures={pictureReducer.payload? pictureReducer.payload : []}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, { fetchPostsWithRedux })(App)
