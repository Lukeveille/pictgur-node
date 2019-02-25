import React from 'react';
import { connect } from 'react-redux';

const GalleryPreview = ({images, title}) => {
  return (
    <div>
      {
        <img src={images? images[0].link : null} alt={title}/>
      }
      {/* <img src={null} alt={title}/> */}
      {console.log(images)}
    </div>
  )
}

const mapStateToProps = state => (state)

export default connect(mapStateToProps, null)(GalleryPreview)