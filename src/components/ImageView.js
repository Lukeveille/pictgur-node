import React from "react"

export const ImageView = ({
  pictures
}) => (
  <div className='image-view'>
    {console.log(pictures)}
    <img src={picture.src} alt={picture.alt} />
  </div>
)