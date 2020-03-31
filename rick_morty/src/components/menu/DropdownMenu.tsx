import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider
} from "@material-ui/core";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useStyles } from "./MenuStyles";

const Menu = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            <ListItem button onClick={handleClick} className={classes.menuItem}>
                <ListItemText primary="Characters" />
                {open ? <FaArrowUp /> : <FaArrowDown />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Divider />
                <List component="div" disablePadding>
                    <ListItem button className={classes.menuItem}>
                        <Link to="/characters" className="link-menu">
                            <ListItemText inset primary="Characters list" />
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.menuItem}>
                        <Link to="/compare-characters" className="link-menu">
                            <ListItemText inset primary="Compare Characters" />
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.menuItem}>
                        <Link to="/characters-history" className="link-menu">
                            <ListItemText inset primary="Characters History" />
                        </Link>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button className={classes.menuItem}>
                <Link to="/locations" className="link-menu">
                    <ListItemText primary="Locations" />
                </Link>
            </ListItem>

            <ListItem button className={classes.menuItem}>
                <Link to="/episodes" className="link-menu">
                    <ListItemText primary="Episodes" />
                </Link>
            </ListItem>
        </List>
        // <div className="links-container">
        //     <Link to="/characters" className="link-menu">
        //         Characters
        //     </Link>
        //     <Link to="/locations" className="link-menu">
        //         Locations
        //     </Link>
        //     <Link to="/episodes" className="link-menu">
        //         Episodes
        //     </Link>
        // </div>
    );
};

export default Menu;
