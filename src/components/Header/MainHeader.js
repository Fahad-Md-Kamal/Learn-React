import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  let activeClassName = classes.active;

  const isActiveNav = ({isActive}) => isActive ? activeClassName : undefined;
  

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="welcome" className={isActiveNav} >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"className={isActiveNav}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
