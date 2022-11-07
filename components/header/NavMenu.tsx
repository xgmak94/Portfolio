import React from 'react';

import NavItem from './NavItem';
import ResumeItem from './ResumeItem';

interface props {
  setMenu: Function;
}
function NavMenu({ setMenu }: props) {
  return (
    <>
      <NavItem link="/projects" text="projects" setMenu={setMenu} />
      <NavItem link="/about" text="about" setMenu={setMenu} />
      <NavItem link="/contact" text="contact" setMenu={setMenu} />
      <ResumeItem />
    </>
  );
}

export default NavMenu;
