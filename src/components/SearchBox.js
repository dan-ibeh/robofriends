import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <input
    type='search'
    className='pa3 ba b--green bg-lightest-blue'
    placeholder='search robots'
    onChange={searchChange}
    >
    </input>
  )
}

export default SearchBox
