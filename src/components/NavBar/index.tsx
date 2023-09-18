import styles from './styles.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Socials from '../Socials';

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
  return (
    <>
      <nav>
        <div className={styles.nav__social}>{Socials}</div>
        <div className={styles.nav__lg}>{navItems}</div>
        <div onClick={handleToggle} className={styles.theme__switch}>
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
      </nav>
    </>
  );
}
