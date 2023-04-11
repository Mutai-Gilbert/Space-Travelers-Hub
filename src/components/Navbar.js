import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <nav>
    <div className="logo-container">
      <img src={planet} alt="logo" className="logo-img" />
      <h1 className="nav-title">Space Travelers&apos; hub</h1>
    </div>
    <ul className="nav-links-container">
      <li>
        <NavLink
          className="nav-link"
          style={({ isActive }) => (isActive
            ? { textDecoration: 'underline' }
            : { textDecoration: 'none' })}
          to="/"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-link"
          style={({ isActive }) => (isActive
            ? { textDecoration: 'underline' }
            : { textDecoration: 'none' })}
          to="/missions"
        >
          Missions
        </NavLink>
      </li>
      |
      <li>
        <NavLink
          className="nav-link"
          style={({ isActive }) => (isActive
            ? { textDecoration: 'underline' }
            : { textDecoration: 'none' })}
          to="/profile"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
