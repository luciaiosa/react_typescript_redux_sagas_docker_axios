import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = (): JSX.Element => {
    return (
        <div className="links-container">
            <Link to="/characters" className="link">
                Characters
            </Link>
            <Link to="/locations" className="link">
                Locations
            </Link>
            <Link to="/episodes" className="link">
                Episodes
            </Link>
        </div>
    );
};

export default Menu;
