import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({ url }) => {

  const [resident, setResident] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <article className='card'>
      <header className='card-header'>
        <img src={resident?.image} alt="" />
        <div className='card-status'>
        <div className={`card-circle resident?.status ${resident?.status}`}></div>
          <span>{resident?.status}</span>

        </div>
      </header>
      <section className='card-body'>
        <h3 className='card-name'>{resident?.name}</h3>
        <ul className='card-list'>
          <li className='card-item'><span className='card-span'>Species: </span>{resident?.species}</li>
          <li className='card-item'><span className='card-span'>Origin: </span>{resident?.origin.name}</li>
          <li className='card-item'><span className='card-span'>Episodes where appears: </span>{resident?.episode.length}</li>
        </ul>
      </section>
    </article>
  )
}

export default CardResident