import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { NavLink } from './NavLink';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0
        ? setIsScrolled(true)
        : setIsScrolled(false)
    })

    return () => {
      window.removeEventListener('scroll', (e) => { e.preventDefault() })
    }
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled && styles.onScrollWindow}`}>
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
