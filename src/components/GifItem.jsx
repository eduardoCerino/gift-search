import React from 'react'

export const GifItem = ({images}) => {
  return (
    <>
           {
          images.map((image) => (
            <div className="card" key={image.id}>
                <img src={image.url} alt={image.title} />
                <p>{image.title}</p>
            </div>
          ) ) 
          }

    </>
  )
}
