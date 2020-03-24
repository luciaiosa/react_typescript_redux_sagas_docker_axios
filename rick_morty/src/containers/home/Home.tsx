import React, { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import "./Home.css";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "../../store/app";
import charactersImage from "../../assets/characters.jpeg";
import episodesImage from "../../assets/episodes.jpeg";
import locationsImage from "../../assets/location.jpeg";
import { styles } from "./HomeStyles";

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is the replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

const Home: FunctionComponent = () => {
    const classes = styles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([]));
    }, [dispatch]);
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>Welcome to Rick and Morty page!</h2>
                <p className={classes.description}>
                    Rick and Morty is a television show. <br />
                    The American animated television show is created by Justin
                    Roiland and Dan Harmon. It premiered on Cartoon Network's
                    [adult swim] block on December 2, 2013. <br />
                    Here you have access to about hundreds of characters,
                    images, locations and episodes. This page is filled with
                    canonical information as seen on the TV show. <br />
                    Season 4 characters, locations and episodes are coming soon!
                </p>

                <GridList
                    cellHeight={280}
                    cols={2}
                    spacing={10}
                    className={classes.gridList}
                >
                    <GridListTile>
                        <img src={charactersImage} alt="characters" />
                        <Link to={`/characters`} className="header">
                            <GridListTileBar
                                title="Go to Characters list"
                                subtitle="See our characters list!"
                            />
                        </Link>
                    </GridListTile>
                    <GridListTile>
                        <img src={episodesImage} alt="episodes" />
                        <Link to={`/episodes`} className="header">
                            <GridListTileBar
                                title="Go to Episodes list"
                                subtitle="See our episodes list!"
                            />
                        </Link>
                    </GridListTile>
                    <GridListTile>
                        <img src={locationsImage} alt="locations" />
                        <Link to={`/locations`} className="header">
                            <GridListTileBar
                                title="Go to Locations list"
                                subtitle="See our locations list!"
                            />
                        </Link>
                    </GridListTile>
                </GridList>
            </div>
        </div>
    );
};

export default Home;
