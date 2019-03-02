import React from "react";
import { connect } from "react-redux";;
import GalleryPreview from './GalleryPreview';
import Eclipse from '../images/eclipse-loader.svg';
import SVG from 'react-inlinesvg'

let Gallery = ({ data, fetching, error }) => (
  <div className='image-feed'>
    {fetching? <h3><SVG src={Eclipse}/></h3> : error? <h3>{error.message}</h3> : data.map((gallery) => {
      return (
        <GalleryPreview 
          key={gallery.id}
          gallery={gallery? gallery : null}
        />
      )
    })}
  </div>
)

const mapStateToProps = state => ({
  ...state,
  data: state.data? state.data : [],
  fetching: state.fetching,
  error: state.error
});

export default connect(mapStateToProps, null)(Gallery);
