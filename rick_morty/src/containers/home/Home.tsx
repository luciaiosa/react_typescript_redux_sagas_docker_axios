import React, { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Button from "../../components-ui/Button";
import "./Home.css";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "../../store/app";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            flexDirection: 'column'
        }
    }),
);

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is the replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

const Home: FunctionComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([]));
    }, [dispatch]);
    return (
        <div className={classes.root}>
            <div>
                <h2>Welcome to Rick and Morty page!</h2>
                <Link to="/characters">
                    <Button>Go to Characters List</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
