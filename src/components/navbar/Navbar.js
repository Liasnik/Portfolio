import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import './style.css'

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link'

  return (
    <nav className="nav ">
      <div className="nav-row container">
        <NavLink to="/Portfolio" className="logo">
          <strong>Alexander Liasnik</strong> <i>Software Engineer</i>
        </NavLink>

        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink
              to="/Portfolio"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/Portfolio/projects"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/Portfolio/contacts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contacts
            </NavLink>
          </li>
        </ul>

        <BtnDarkMode />
      </div>
    </nav>
  )
}

export default Navbar
