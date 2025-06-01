import React from 'react';

const Button = ({ onClick, children, variant = 'primary', className = '' }) => {
  const baseStyle = 'px-4 py-2.5 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out flex items-center justify-center space-x-2';

  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-400',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 focus:ring-indigo-500',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
