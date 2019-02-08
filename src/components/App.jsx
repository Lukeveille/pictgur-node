import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialize } from '../actions'
import { ImageFeed } from './ImageFeed.jsx'

class App extends Component {
  componentDidMount () {
    this.props.initialize()
  }
  render() {
    const {
      pictures
    } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Pictgur</h1>
        </div>
        <div className="App-body">
          <ImageFeed 
            pictures={pictures}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, { initialize })(App)
