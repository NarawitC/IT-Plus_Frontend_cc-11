import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function EyeButton({ link }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`${link}`);
  };
  return (
    <>
      <button onClick={() => handleButtonClick()}>
        <FaEye />
      </button>
    </>
  );
}

export default EyeButton;
