import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data = '' }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data);

  const onSearchHandler = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      console.log('Navigating to:', `/Course-list/${trimmedInput}`);
      navigate(`/Course-list/${encodeURIComponent(trimmedInput)}`);
    } else {
      console.log('Input is empty, navigation skipped');
    }
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded"
    >
      <img src={assets.search_icon} alt="Search courses" className="md:w-auto w-10 px-3" />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for course"
        className="w-full h-full outline-none text-gray-500/80"
      />
      <button
        type="submit"
        className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-2 py-3 mx-2"
      >
        Search 
      </button>
    </form>
  );
};

export default SearchBar;