import React from "react"

export const ImageFeed = ({
  pictures
}) => (
  <div className='image-feed'>
    {
      pictures.map((picture) => {
        return (
          <img key={picture.id} src={picture.src} alt={picture.alt} />
        )
      })
    }
  </div>
)