import React from "react"
import { connect } from "react-redux";

let ImageFeed = ({
  payload
}) => (
  <div className='image-feed'>
  {console.log(payload)}
    {
      payload.map((picture) => {
        return (
          <a key={picture.id} href={"/" + picture.id}>
            <img src={picture.link} alt={picture.name} />
          </a>
        )
      })
    }
  </div>
)

const mapStateToProps = state => (state);

export default connect(mapStateToProps, null)(ImageFeed);
