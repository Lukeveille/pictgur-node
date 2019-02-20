import React from "react"

export const ImageFeed = ({
  pictures
}) => (
  <div className='image-feed'>
  {console.log(pictures)}
    {
      pictures.map((picture) => {
        return (
          <a key={picture._id} href={"/" + picture._id}>
            <img src={picture.src} alt={picture.alt} />
          </a>
        )
      })
    }
  </div>
)