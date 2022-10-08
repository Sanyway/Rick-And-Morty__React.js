import React from 'react'

const FilterList = ({suggestList, setFindInput, stopProps}) => {

const handleClick = (id) => setFindInput(id)
console.log(stopProps)
  return (
    <div style={stopProps ? {display: ''} : {display: 'none'}}>
    {
        suggestList?.map(location => 
            <li onClick={() => handleClick(location.id)} key={location.id}>{location.id} {location.name}</li>
            )
    }
    
    </div>
  )
}

export default FilterList