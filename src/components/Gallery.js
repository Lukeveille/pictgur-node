import React from "react"
import { connect } from "react-redux";
import GalleryPreview from './GalleryPreview'

let Gallery = ({ payload, fetching, error }) => (
  <div className='image-feed'>
    {console.log(payload)}
    {fetching? <h3>Loading...</h3> : error? <h3>{error.message}</h3> : payload.map((gallery) => {
      return (
        <GalleryPreview 
          key={gallery.id}
          gallery={gallery? gallery : null}
        />
      )
    })}
  </div>
)

const mapStateToProps = state => (state);

export default connect(mapStateToProps, null)(Gallery);
