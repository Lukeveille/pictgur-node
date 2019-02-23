import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchPictures } from '../actions'
// import ImageFeed from './ImageFeed'

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchPictures();
  // }
  render() {
    // const {
    //   pictures
    // } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Pictgur</h1>
        </div>
        <div className="App-body">
          {/* <ImageFeed 
            payload={pictures.payload}
          /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);
// const mapDispatchToProps = { fetchPictures };

export default connect(mapStateToProps, null)(App)
