import React from "react";
import classes from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <div className="brand">
        <title>Spotify</title>
      </div>
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <FontAwesomeIcon icon={faHouse} />{" "}
            <span className={classes.menuItemText}>Home</span>
          </NavLink>
        </div>
        <div className={classes.menuItem}>
          <NavLink
            to="/search"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
            <span className={classes.menuItemText}>Search</span>
          </NavLink>
        </div>
        <div className={classes.menuItem}>
          <NavLink
            to="/library"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <FontAwesomeIcon icon={faBook} />{" "}
            <span className={classes.menuItemText}>Library</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
