import React from 'react'

const FilterList = ({suggestList, setFindInput}) => {

const handleClick = (id) => setFindInput(id)

  return (
    <div>
    {
        suggestList?.map(location => 
            <li onClick={() => handleClick(location.id)} key={location.id}>{location.id} {location.name}</li>
            )
    }
    
    </div>
  )
}

export default FilterList