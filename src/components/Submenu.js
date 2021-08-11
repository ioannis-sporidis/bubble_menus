import { useState, useEffect, useContext } from 'react';
import { useGlobalContext, useGlobalcontext } from '../helpers/context';

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
      submenu
    </aside>
  );
};

export default Submenu;
