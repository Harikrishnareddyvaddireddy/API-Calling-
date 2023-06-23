import React from 'react'

export default function API({image,title,price,rating}) {
  return (
    <>
    <div className="card">
            <img src={image} alt='' />
            <p>{title}</p>
            <p> RS:${price}</p>
            <p>{rating.rate}</p>
        </div>
    </>
  )
}
