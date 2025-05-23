import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div className=''>
            <img src="search.svg" alt="search" />

            <input 
                type="text" 
                placeholder='Search for a movie or TV show' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    </div>
  )
}

export default Search