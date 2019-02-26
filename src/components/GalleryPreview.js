import React from 'react';
import { connect } from 'react-redux';

const GalleryPreview = ({gallery}) => {
  const coverImage = gallery.images? gallery.images[0] : [gallery]

  return (
    <div>
      <span>{gallery.images? gallery.images.length > 1? gallery.images.length : null : null}</span>
      <div>
        {coverImage.type === "video/mp4"?
          <video autoPlay={true} loop={true} muted={true} src={coverImage? coverImage.link : null} alt={gallery.title} />
          :
          <img src={coverImage? coverImage.link : null} alt={gallery.title}/>
        }
      </div>
      up: {gallery.ups}
      down: {gallery.downs}
      comments: {gallery.comment_count}
      views: {gallery.views}
    </div>
  )
}

const mapStateToProps = state => (state)

export default connect(mapStateToProps, null)(GalleryPreview)