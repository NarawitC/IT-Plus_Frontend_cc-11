import React from 'react';

function SmPillButton({ text, icon, onClick, type, className, theme }) {
  return (
    <div>
      <button
        type={type}
        className={`h-8 px-4 m-2 text-sm lg:text-base transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-400 hover:text-white focus:shadow-outline ${className}`}
        onClick={onClick}
      >
        <span>
          {icon ? icon : null}
          {text}
        </span>
      </button>
    </div>
  );
}

export default SmPillButton;
