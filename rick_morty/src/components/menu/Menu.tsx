import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./MenuStyles";

const Menu = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.linksContainer}>
            <Link to="/characters" className={classes.linkMenu}>
                Characters
            </Link>
            <Link to="/locations" className={classes.linkMenu}>
                Locations
            </Link>
            <Link to="/episodes" className={classes.linkMenu}>
                Episodes
            </Link>
        </div>
    );
};

export default Menu;
