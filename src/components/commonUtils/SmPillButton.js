import React from 'react';

function SmPillButton({ text, icon, onClick, type, className }) {
  return (
    <div>
      <button
        type={type}
        className={`h-8 px-4 m-2 text-sm lg:text-base transition-colors duration-150 bg-gray-200 rounded-full focus:shadow-outline hover:bg-orange-400 hover:text-white focus:shadow-outline ${className}`}
        onClick={onClick}
      >
        {text}
        {icon ? icon : null}
      </button>
    </div>
  );
}

export default SmPillButton;
