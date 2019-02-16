import React from "react"

export const ImageFeed = ({
  pictures
}) => (
  <div className='image-feed'>
  {console.log(pictures)}
    {
      pictures.map((picture) => {
        return (
          <img key={picture._id} src={picture.src} alt={picture.alt} />
        )
      })
    }
  </div>
)