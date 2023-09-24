import styles from './styles.module.css';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

interface NavBarProps {
  isDarkMode: boolean;
  handleToggle: () => void;
}

const navItems = (
  <>
    <div>
      <a href="#" className={`nav__item`}>
        Work
      </a>
    </div>
    <div>
      <a href="#" className={`nav__item`}>
        About
      </a>
    </div>
    <div>
      <a href="#" className={`nav__item`}>
        Contact
      </a>
    </div>
  </>
);

export default function NavBar({ isDarkMode, handleToggle }: NavBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="container">
        {/* <div className={styles.nav__social}>{Socials}</div> */}
        <div onClick={() => setOpen(!open)} className={styles.hamburger}>
          {open ? <MdClose /> : <GiHamburgerMenu />}
        </div>
        <div className={styles.nav__lg}>{navItems}</div>
        <div onClick={handleToggle} className={styles.theme__switch}>
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
      </nav>
      <div
        className={`container ${open ? styles.open : ''} ${styles.transition}`}
      >
        <div className={`menu ${open ? styles.open : ''} ${styles.menu}`}>
          {navItems}
        </div>
      </div>
    </>
  );
}
