import { useLocation, Link } from "react-router-dom";
import styles from './NavLink.module.css'

export const NavLink = ({ to, children }: { to: string, children?: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to
  return (
    <Link className={`${styles.navLink} ${isActive && styles.active}`} to={to}>
      {children}
    </Link>
  )
}