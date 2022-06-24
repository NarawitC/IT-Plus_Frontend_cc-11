import React from 'react';

function DevSidebarMenu({ title, path }) {
  return (
    <li>
      <a href={path}>{title}</a>
    </li>
  );
}

export default DevSidebarMenu;
