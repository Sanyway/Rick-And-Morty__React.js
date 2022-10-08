import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './assets/components/CardResident'
import ErrorScreen from './assets/components/ErrorScreen'
import FilterList from './assets/components/FilterList'
import LocationInfo from './assets/components/LocationInfo'
import getRandomNumber from './assets/utils/getRandomNumber'
import frontPage from './assets/images/front-page.jpg'


function App() {

  const [location, setLocation] = useState()
  const [findInput, setFindInput] = useState()
  const [suggestList, setSuggestList] = useState()
  const [hasError, setHasError] = useState(false)
  const [stopProps, setStopProps] = useState(false)


  useEffect(() => {
    let random = getRandomNumber()
    const URL = `https://rickandmortyapi.com/api/location/${findInput ? findInput : random}`
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))

  }, [findInput])



  const handleSubmit = event => {

    event.preventDefault()
    setFindInput(event.target.find.value)


  }
  
  const handleChange = event => {
    if (event.target.value === '') {
      setSuggestList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
      axios.get(URL)
        .then(res => setSuggestList(res.data.results))
        .catch(err => console.log(err))
    }
  }


  const stopLi= () => {
    setStopProps(false)
}

const runLi = (event) => {
event.stopPropagation()
setStopProps(true)
}


  return (
    <div onClick={stopLi} className="App">
      <img className='img-front' src={frontPage} alt="" />
      <h1 className='title'>Rick And Morty</h1>
      <div className='find-location'>
        <form onClick={runLi} className='form' onSubmit={handleSubmit}>
          <input
            id='find'
            placeholder='Type location id' type="text" onChange={handleChange}
          />
          <button className='button-find'>Find</button>
          <FilterList stopProps={stopProps}
            suggestList={suggestList} setFindInput={setFindInput} />
        </form>
      </div>
      {
        hasError ?
          <ErrorScreen />

          :
          <>
            <LocationInfo location={location} />
            <div className='card-container'>
              {
                location?.residents.map(url => (
                  <CardResident 
                    key={url}
                    url={url}
                  />
                ))
              }

            </div>
          </>
      }
    </div>

  )
}

export default App
