import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { initialize } from '../actions'
import { fetchPostsWithRedux } from '../actions'
// import { ImageFeed } from './ImageFeed.jsx'

class App extends Component {
  // fetchPics(x = 1) {
  //   fetch('http://localhost:9095/api/pictures', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((res) => {
  //     this.props.initialize(res);
  //   })
  //   .catch(err => {
  //     if (x < 5) {
  //       this.fetchPics(x+1);
  //       console.log(err + x)
  //     }
  //   })
  // }
  componentDidMount() {
    // this.fetchPics();
  }
  render() {
    // const {
    //   pictures
    // } = this.props;
    // console.log(pictures)
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Pictgur</h1>
        </div>
        <div className="App-body">
          {/* <ImageFeed 
            pictures={pictures}
          /> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, { fetchPostsWithRedux })(App)
