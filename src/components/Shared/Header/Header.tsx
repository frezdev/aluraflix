import styles from './Header.module.css';
import { NavLink } from './NavLink';

export const Header = () => {

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logoContainer}>
          <a href="/">
            <img src="/images/logo.webp" alt="logo" />
          </a>
        </div>
        <div className={styles.navigations}>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to="/new">NUEVO VIDEO</NavLink>
        </div>
      </nav>
    </header>
  )
}
