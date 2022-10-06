import React from 'react'




const LocationInfo = ({ location }) => {



  return (
    <article>
      <div className='location-info'>
      <h2 className='location'>Location:<span></span></h2>
      <h1 className='location-title'>{location?.name}</h1>
      </div>
      <ul className='location-list'>
        <li className='location-item'><span>Type: </span>{location?.type}</li>
        <li className='location-item'><span>Dimention: </span>{location?.dimension}</li>
        <li className='location-item'><span>Residents: </span>{location?.residents.length}</li>
      </ul>

    </article>
  )
}

export default LocationInfo