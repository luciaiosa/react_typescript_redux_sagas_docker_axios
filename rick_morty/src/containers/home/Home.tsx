import React, { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "../../components-ui/Button";
import "./Home.css";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "../../store/app";
import charactersImage from "../../assets/characters.jpeg";
import episodesImage from "../../assets/episodes.jpeg";
import locationsImage from "../../assets/location.jpeg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
            flexDirection: "column"
        },
        container: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            overflow: "hidden",
            flexDirection: "column"
        },
        gridList: {
            width: "100%",
            height: "auto"
        }
    })
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
            <div className={classes.container}>
                <h2>Welcome to Rick and Morty page!</h2>
                <p>
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
                    className={classes.gridList}
                >
                    <GridListTile>
                        <img src={charactersImage} alt="characters image" />
                        <Link to={`/characters`} className="header">
                            <GridListTileBar
                                title="Go to Characters list"
                                subtitle="See our characters list!"
                            />
                        </Link>
                    </GridListTile>
                    <GridListTile>
                        <img src={episodesImage} alt="episodes image" />
                        <Link to={`/episodes`} className="header">
                            <GridListTileBar
                                title="Go to Episodes list"
                                subtitle="See our episodes list!"
                            />
                        </Link>
                    </GridListTile>
                    <GridListTile>
                        <img src={locationsImage} alt="locations image" />
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
