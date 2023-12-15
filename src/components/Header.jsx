import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            React Hook
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="trangchu"
                  aria-current="page"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="login-demo">
                  Login
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hook
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/use-state-demo">
                    UseState
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/change-profile-use-state"
                  >
                    Change Profile UseState
                  </NavLink>
                  <NavLink className="dropdown-item" to="/use-effect-didmount">
                    Use Effect
                  </NavLink>
                  <NavLink className="dropdown-item" to="/use-effect-didupdate">
                    Use Effect DidUpdate
                  </NavLink>
                  <NavLink className="dropdown-item" to="/use-effect-unmout">
                    Use Effect Unmout
                  </NavLink>
                  {/* <NavLink className="dropdown-item" to="/redux-hook-chat-demo">
                    Chat hook
                  </NavLink> */}
                  <NavLink
                    className="dropdown-item"
                    to="/redux-hook-usecallback"
                  >
                    hook useCallbak
                  </NavLink>
                  <NavLink className="dropdown-item" to="/redux-hook-usememo">
                    hook useMemo
                  </NavLink>
                  <NavLink className="dropdown-item" to="/redux-hook-useref">
                    hook useRef
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  redux
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/redux-hook-chat-demo">
                    Chat hook
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/redux-hook-change-fontsize"
                  >
                    Demo Change FontSize
                  </NavLink>
                  <NavLink className="dropdown-item" to="/redux-hook-form">
                    Demo form redux hook
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  lib hook
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/redux-hook-formik">
                    hook formik
                  </NavLink>
                  <NavLink className="dropdown-item" to="/demo-ant">
                    demo ant design
                  </NavLink>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
