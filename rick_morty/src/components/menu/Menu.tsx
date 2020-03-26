import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = (): JSX.Element => {
    return (
        <div className="links-container">
            <Link to="/characters" className="link-menu">
                Characters
            </Link>
            <Link to="/locations" className="link-menu">
                Locations
            </Link>
            <Link to="/episodes" className="link-menu">
                Episodes
            </Link>
        </div>
    );
};

export default Menu;
