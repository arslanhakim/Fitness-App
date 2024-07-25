import React from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = () => {
    return (
        <div className="flex bg-gray-normal text-gray-extraLight shadow-md rounded-2xl px-5 items-center">
            <input
                placeholder="Search"
                className="bg-transparent outline-none w-44 text-white text-xs Exo-Regular border-none "
            />
            <FaSearch />
        </div>
    )
}
