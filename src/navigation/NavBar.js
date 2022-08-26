import { useState } from 'react';
import Links from './Links';
import Header from './Header';
import Logo from './Logo';
import BurgerButton from './BurgerButton';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import './NavBar.css';

const NavBar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={() => setDrawerIsOpen(false)} />}
      <SideDrawer show={drawerIsOpen} onClick={() => setDrawerIsOpen(false)}>
        <Links onClick={() => setDrawerIsOpen(false)} />
      </SideDrawer>
      <Header>
        <Logo letter={'E'} />
        <div className='nav-links'>
          <Links />
        </div>
        <div className='burger-links'>
          <BurgerButton onClick={() => setDrawerIsOpen(true)} />
        </div>
      </Header>
    </>
  );
};

export default NavBar;
