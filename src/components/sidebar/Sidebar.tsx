import React from 'react';
import classes from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faBook } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className="brand">
                <title>Spotify</title>
            </div>
            <div className={classes.menu}>
                <div className={classes.menuItem}>
                    <a href="#">
                        <FontAwesomeIcon icon={faHouse} /> <span className={classes.menuItemText}>Home</span>
                    </a>
                </div>
                <div className={classes.menuItem}>
                    <a href="#">
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> <span className={classes.menuItemText}>Search</span>
                    </a>
                </div>
                <div className={classes.menuItem}>
                    <a href="#">
                        <FontAwesomeIcon icon={faBook} /> <span className={classes.menuItemText}>Library</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;