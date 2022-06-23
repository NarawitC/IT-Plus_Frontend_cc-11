import React from 'react';

function SubmitButtonYup({ children, className, ...props }) {
  return (
    <button type="submit" className={className} {...props}>
      {children}
    </button>
  );
}

export default SubmitButtonYup;
