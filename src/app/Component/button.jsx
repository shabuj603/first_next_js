import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-indigo-600 text-white rounded
                       hover:bg-indigo-700 transition">
      {text}
    </button>
  );
};

export default Button;