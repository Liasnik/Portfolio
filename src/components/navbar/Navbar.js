import { NavLink } from 'react-router-dom'
import ButtonDarkMode from '../buttonDarkMode/ButtonDarkMode'
import './navbar.css'

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link'

  return (
    <nav className="nav ">
      <div className="nav-row container">
        <div className="logo">
          <strong>Alexander Liasnik</strong>
        </div>

        <ButtonDarkMode />

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
              to="/projects"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
