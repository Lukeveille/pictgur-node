import React from 'react';
import { connect } from 'react-redux';

const GalleryPreview = ({gallery, autoplay}) => {
  const coverImage = gallery.images? gallery.images[0] : gallery;

  return (
    <div className="gallery-preview">
      <span>{gallery.images? gallery.images.length > 1? gallery.images.length : null : null}</span>
      <span>{gallery.title}</span>
      <div>
        {coverImage.type === "video/mp4"?
          <video className="image" autoPlay={autoplay} loop={true} muted={true} src={coverImage? coverImage.link : null} alt={gallery.title} />
          :
          <img className="image" src={coverImage? coverImage.link : null} alt={gallery.title}/>
        }
      </div>
      up: {gallery.ups} | 
      down: {gallery.downs} | 
      comments: {gallery.comment_count} | 
      views: {gallery.views}
    </div>
  )
}

const mapStateToProps = state => ({
  ...state,
  autoplay: state.autoplay
});

export default connect(mapStateToProps, null)(GalleryPreview)