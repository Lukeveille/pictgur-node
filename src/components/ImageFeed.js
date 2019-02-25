import React from "react"
import { connect } from "react-redux";

let ImageFeed = ({ payload, fetching, error }) => (
  <div className='image-feed'>
    {fetching? <h3>Loading...</h3> : error? <h3>{error.message}</h3> : payload.map((picture) => {
      return (
        <a key={picture.id} href={"/" + picture.id}>
          <img src={picture.link} alt={picture.name} />
        </a>
      )
    })}
  </div>
)

const mapStateToProps = state => (state);

export default connect(mapStateToProps, null)(ImageFeed);
