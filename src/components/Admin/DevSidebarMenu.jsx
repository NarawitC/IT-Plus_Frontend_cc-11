import React from 'react';

function DevSidebarMenu({ title, path, onClick }) {
  return (
    <li>
      <a href={path} onClick={onClick}>
        {title}
      </a>
    </li>
  );
}

export default DevSidebarMenu;
