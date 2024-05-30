// components/SearchBar.js
import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded-lg mb-4 text-gray-700"
    />
  )
}

export default SearchBar
